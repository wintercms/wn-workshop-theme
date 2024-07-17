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
        if (!this.element.closest(trigger.get('parent'))) {
          return [];
        }
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
        return ['checked', 'unchecked', 'empty', 'value', 'oneof', 'allof', 'focus', 'attr', 'class'].includes(condition.name.toLowerCase());
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
            case 'focus':
              trigger.get('conditionCallbacks').push(_this3.createFocusedCondition(trigger));
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
     * Creates a trigger that fires when a target element(s) is focused or blurred.
     *
     * @param {TriggerEntity} trigger
     */
  }, {
    key: "createFocusedCondition",
    value: function createFocusedCondition(trigger) {
      var _this8 = this;
      var supportedElements = new Set();
      trigger.get('elements').forEach(function (element) {
        // All elements are supported (technically)
        supportedElements.add(element);
      });
      supportedElements.forEach(function (element) {
        _this8.addEvent(element, trigger, 'focus');
        _this8.addEvent(element, trigger, 'blur');
      });
      return function () {
        return Array.from(supportedElements).some(function (element) {
          return document.activeElement === element;
        });
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
      var _this9 = this;
      this.parseCommand(trigger.get('action')).forEach(function (action) {
        switch (action.name) {
          case 'show':
          case 'hide':
            _this9.actionShow(trigger, action.parameters[0] ? Array.from(_this9.element.querySelectorAll(action.parameters[0])) : [_this9.element], action.name === 'show' ? conditionMet : !conditionMet);
            break;
          case 'enable':
          case 'disable':
            _this9.actionEnable(trigger, action.parameters[0] ? Array.from(_this9.element.querySelectorAll(action.parameters[0])) : [_this9.element], action.name === 'enable' ? conditionMet : !conditionMet);
            break;
          case 'empty':
            if (conditionMet) {
              _this9.actionValue(trigger, conditionMet, action.parameters[0] ? Array.from(_this9.element.querySelectorAll(action.parameters[0])) : [_this9.element], '');
            }
            break;
          case 'value':
          case 'valueOf':
            _this9.actionValue.apply(_this9, [trigger, conditionMet, action.name === 'valueOf' ? Array.from(_this9.element.querySelectorAll(action.parameters[0])) : [_this9.element]].concat(_toConsumableArray(action.parameters.length > 0 && action.name === 'valueOf' ? action.parameters.slice(1) : action.parameters)));
            break;
          case 'class':
          case 'classOf':
            _this9.actionClass.apply(_this9, [trigger, conditionMet, action.name === 'classOf' ? Array.from(_this9.element.querySelectorAll(action.parameters[0])) : [_this9.element]].concat(_toConsumableArray(action.name === 'classOf' ? action.parameters.slice(1) : action.parameters)));
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
      var _this10 = this;
      elements.forEach(function (element) {
        if (show && getComputedStyle(element).display === 'none') {
          element.classList.remove('hide');
          if (!element.dataset.originalDisplay) {
            element.style.display = 'block';
          } else {
            element.style.display = element.dataset.originalDisplay;
          }
          delete element.dataset.originalDisplay;
          _this10.afterAction(trigger, element);
        } else if (!show && getComputedStyle(element).display !== 'none') {
          element.classList.add('hide');
          element.dataset.originalDisplay = getComputedStyle(element).display;
          element.style.display = 'none';
          _this10.afterAction(trigger, element);
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
      var _this11 = this;
      elements.forEach(function (element) {
        element.classList[enable ? 'remove' : 'add']('control-disabled');
        if (element.disabled !== undefined) {
          element.disabled = !enable;
        }
        _this11.afterAction(trigger, element);
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
      var _this12 = this;
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
        _this12.afterAction(trigger);
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
      var _this13 = this;
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
        _this13.afterAction(trigger);
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

/***/ "./assets/js/src/theme.js":
/*!********************************!*\
  !*** ./assets/js/src/theme.js ***!
  \********************************/
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
/******/ 			"/assets/js/theme": 0,
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
/******/ 	__webpack_require__.O(undefined, ["assets/css/theme"], () => (__webpack_require__("./assets/js/src/theme.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/theme"], () => (__webpack_require__("./assets/css/base.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvUGx1Z2luQmFzZS5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9hYnN0cmFjdHMvU2luZ2xldG9uLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2FqYXgvUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9hamF4L2hhbmRsZXJzL0F0dHJpYnV0ZVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0Fzc2V0TG9hZGVyLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9BdHRhY2hMb2FkaW5nLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9EYXRhQ29uZmlnLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9GbGFzaC5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRmxhc2hMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRm9ybVZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1N0cmlwZUxvYWRlci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvU3R5bGVzaGVldExvYWRlci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvVHJhbnNpdGlvbi5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvVHJpZ2dlci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL0lubmVyUHJveHlIYW5kbGVyLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL21haW4vUGx1Z2luTG9hZGVyLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL21haW4vUHJveHlIYW5kbGVyLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL21haW4vU25vd2JvYXJkLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL3V0aWxpdGllcy9Db29raWUuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvdXRpbGl0aWVzL0pzb25QYXJzZXIuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvdXRpbGl0aWVzL1Nhbml0aXplci5qcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC91dGlsaXRpZXMvVXJsLmpzIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS8uL2Fzc2V0cy9qcy9zcmMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lLy4vYXNzZXRzL2Nzcy9iYXNlLmNzcyIsIndlYnBhY2s6Ly93aW50ZXJjbXMtd29ya3Nob3AtdGhlbWUvLi4vLi4vbm9kZV9tb2R1bGVzL2pzLWNvb2tpZS9kaXN0L2pzLmNvb2tpZS5tanMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3dpbnRlcmNtcy13b3Jrc2hvcC10aGVtZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2ludGVyY21zLXdvcmtzaG9wLXRoZW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBsdWdpbiBiYXNlIGFic3RyYWN0LlxuICpcbiAqIFRoaXMgY2xhc3MgcHJvdmlkZXMgdGhlIGJhc2UgZnVuY3Rpb25hbGl0eSBmb3IgYWxsIHBsdWdpbnMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsdWdpbkJhc2Uge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogVGhlIGNvbnN0cnVjdG9yIGlzIHByb3ZpZGVkIHRoZSBTbm93Ym9hcmQgZnJhbWV3b3JrIGluc3RhbmNlLCBhbmQgc2hvdWxkIG5vdCBiZSBvdmVyd3JpdHRlblxuICAgICAqIHVubGVzcyB5b3UgYWJzb2x1dGVseSBrbm93IHdoYXQgeW91J3JlIGRvaW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTbm93Ym9hcmR9IHNub3dib2FyZFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNub3dib2FyZCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQbHVnaW4gY29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgYmUgdHJlYXRlZCBhcyB0aGUgdHJ1ZSBjb25zdHJ1Y3RvciBvZiBhIHBsdWdpbiwgYW5kIGNhbiBiZSBvdmVyd3JpdHRlbi5cbiAgICAgKiBJdCB3aWxsIGJlIGNhbGxlZCBzdHJhaWdodCBhZnRlciBjb25zdHJ1Y3Rpb24uXG4gICAgICovXG4gICAgY29uc3RydWN0KCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIHJlcXVpcmVkIHBsdWdpbnMgZm9yIHRoaXMgc3BlY2lmaWMgbW9kdWxlIHRvIHdvcmsuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IEFuIGFycmF5IG9mIHBsdWdpbnMgcmVxdWlyZWQgZm9yIHRoaXMgbW9kdWxlIHRvIHdvcmssIGFzIHN0cmluZ3MuXG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyB0aGUgbGlzdGVuZXIgbWV0aG9kcyBmb3IgZ2xvYmFsIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBkZXN0cnVjdG9yLlxuICAgICAqXG4gICAgICogRmlyZWQgd2hlbiB0aGlzIHBsdWdpbiBpcyByZW1vdmVkLiBDYW4gYmUgbWFudWFsbHkgY2FsbGVkIGlmIHlvdSBoYXZlIGFub3RoZXIgc2NlbmFyaW8gZm9yXG4gICAgICogZGVzdHJ1Y3Rpb24sIGllLiB0aGUgZWxlbWVudCBhdHRhY2hlZCB0byB0aGUgcGx1Z2luIGlzIHJlbW92ZWQgb3IgY2hhbmdlZC5cbiAgICAgKi9cbiAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5kZXRhY2goKTtcbiAgICAgICAgZGVsZXRlIHRoaXMuc25vd2JvYXJkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBsdWdpbiBkZXN0cnVjdG9yIChvbGQgbWV0aG9kIG5hbWUpLlxuICAgICAqXG4gICAgICogQWxsb3dzIHByZXZpb3VzIHVzYWdlIG9mIHRoZSBcImRlc3RydWN0b3JcIiBtZXRob2QgdG8gc3RpbGwgd29yay5cbiAgICAgKi9cbiAgICBkZXN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBTaW5nbGV0b24gcGx1Z2luIGFic3RyYWN0LlxuICpcbiAqIFRoaXMgaXMgYSBzcGVjaWFsIGRlZmluaXRpb24gY2xhc3MgdGhhdCB0aGUgU25vd2JvYXJkIGZyYW1ld29yayB3aWxsIHVzZSB0byBpbnRlcnByZXQgdGhlIGN1cnJlbnQgcGx1Z2luIGFzIGFcbiAqIFwic2luZ2xldG9uXCIuIFRoaXMgd2lsbCBlbnN1cmUgdGhhdCBvbmx5IG9uZSBpbnN0YW5jZSBvZiB0aGUgcGx1Z2luIGNsYXNzIGlzIHVzZWQgYWNyb3NzIHRoZSBib2FyZC5cbiAqXG4gKiBTaW5nbGV0b25zIGFyZSBpbml0aWFsaXNlZCBvbiB0aGUgXCJkb21SZWFkeVwiIGV2ZW50IGJ5IGRlZmF1bHQuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZXRvbiBleHRlbmRzIFBsdWdpbkJhc2Uge1xufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFJlcXVlc3QgcGx1Z2luLlxuICpcbiAqIFRoaXMgaXMgdGhlIGRlZmF1bHQgQUpBWCBoYW5kbGVyIHdoaWNoIHdpbGwgcnVuIHVzaW5nIHRoZSBgZmV0Y2goKWAgbWV0aG9kIHRoYXQgaXMgZGVmYXVsdCBpbiBtb2Rlcm4gYnJvd3NlcnMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlcXVlc3QgZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoZSBjb25zdHJ1Y3RvciBhY2NlcHRzIDIgb3IgMyBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogSWYgMiBwYXJhbWV0ZXJzIGFyZSBwcm92aWRlZCwgdGhlIGZpcnN0IHBhcmFtZXRlciBpcyB0aGUgaGFuZGxlciBuYW1lIGFuZCB0aGUgc2Vjb25kXG4gICAgICogcGFyYW1ldGVyIGlzIHRoZSBvcHRpb25zLiBUaGlzIGFzc3VtZXMgdGhhdCB0aGlzIGlzIGEgZGV0YWNoZWQgQUpBWCByZXF1ZXN0IG5vdCBjb25uZWN0ZWQgdG9cbiAgICAgKiBhbiBlbGVtZW50LlxuICAgICAqXG4gICAgICogSWYgMyBwYXJhbWV0ZXJzIGFyZSBwcm92aWRlZCwgdGhlIGZpcnN0IHBhcmFtZXRlciBpcyBhbiBlbGVtZW50IG9yIGEgc2VsZWN0b3IsIGFuZCB0aGUgc2Vjb25kXG4gICAgICogYW5kIHRoaXJkIHBhcmFtZXRlcnMgYXJlIHRoZSBoYW5kbGVyIGFuZCBvcHRpb25zLCByZXNwZWN0aXZlbHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fHN0cmluZ30gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfE9iamVjdH0gaGFuZGxlclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0KGVsZW1lbnQsIGhhbmRsZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy8gQWxsb3cgdGhlIGVsZW1lbnQgdG8gYmUgYSBoYW5kbGVyIG5hbWUuXG4gICAgICAgICAgICAvLyBUaGlzIGFzc3VtZXMgdGhlIHJlcXVlc3QgaXMgYmVpbmcgbWFkZSBhZ2FpbnN0IG5vIGVsZW1lbnQsIGFuZCB0aGUgaGFuZGxlciBwYXJhbWV0ZXJcbiAgICAgICAgICAgIC8vIHdpbGwgY29udGFpbiBvcHRpb25zLlxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIYW5kbGVyTmFtZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gZWxlbWVudDtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBoYW5kbGVyIHx8IHt9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaGVkRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoZWRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gZWxlbWVudCB3YXMgZm91bmQgd2l0aCB0aGUgZ2l2ZW4gc2VsZWN0b3I6ICR7ZWxlbWVudH1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gbWF0Y2hlZEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5mZXRjaE9wdGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5yZXNwb25zZURhdGEgPSBudWxsO1xuICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBudWxsO1xuICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuY2hlY2tSZXF1ZXN0KCk7XG4gICAgICAgIGlmICghdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhTZXR1cCcsIHRoaXMpKSB7XG4gICAgICAgICAgICB0aGlzLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBuZXcgRXZlbnQoJ2FqYXhTZXR1cCcsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGV2ZW50LnJlcXVlc3QgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuZG9DbGllbnRWYWxpZGF0aW9uKCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgIHRoaXMuZG9Db25maXJtKCkudGhlbigoY29uZmlybWVkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvQWpheCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VEYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzVXBkYXRlKHJlc3BvbnNlKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuWF9XSU5URVJfU1VDQ0VTUyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NFcnJvcihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VFcnJvciA9IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRvQWpheCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NVcGRhdGUocmVzcG9uc2UpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX1NVQ0NFU1MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Vycm9yKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlRXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVwZW5kZW5jaWVzIGZvciB0aGlzIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ2Nvb2tpZScsICdqc29uUGFyc2VyJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIHRoZSBlbGVtZW50IGFuZCBoYW5kbGVyIGdpdmVuIGluIHRoZSByZXF1ZXN0LlxuICAgICAqL1xuICAgIGNoZWNrUmVxdWVzdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCAmJiB0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZWxlbWVudCBwcm92aWRlZCBtdXN0IGJlIGFuIEVsZW1lbnQgaW5zdGFuY2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgQUpBWCBoYW5kbGVyIG5hbWUgaXMgbm90IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5pc0hhbmRsZXJOYW1lKHRoaXMuaGFuZGxlcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBBSkFYIGhhbmRsZXIgbmFtZS4gVGhlIGNvcnJlY3QgaGFuZGxlciBuYW1lIGZvcm1hdCBpczogXCJvbkV2ZW50XCIuJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgRmV0Y2ggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIGlzIG1hZGUgYXZhaWxhYmxlIGZvciBwbHVnaW5zIHRvIGV4dGVuZCBvciBvdmVycmlkZSB0aGUgZGVmYXVsdCBmZXRjaCgpIHNldHRpbmdzIHdpdGggdGhlaXIgb3duLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgZ2V0RmV0Y2goKSB7XG4gICAgICAgIHRoaXMuZmV0Y2hPcHRpb25zID0gKHRoaXMub3B0aW9ucy5mZXRjaE9wdGlvbnMgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmZldGNoT3B0aW9ucyA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICA/IHRoaXMub3B0aW9ucy5mZXRjaE9wdGlvbnNcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycyxcbiAgICAgICAgICAgICAgICBib2R5OiB0aGlzLmRhdGEsXG4gICAgICAgICAgICAgICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgICAgICAgICAgICAgIG1vZGU6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4RmV0Y2hPcHRpb25zJywgdGhpcy5mZXRjaE9wdGlvbnMsIHRoaXMpO1xuXG4gICAgICAgIHJldHVybiBmZXRjaCh0aGlzLnVybCwgdGhpcy5mZXRjaE9wdGlvbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1biBjbGllbnQtc2lkZSB2YWxpZGF0aW9uIG9uIHRoZSBmb3JtLCBpZiBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBkb0NsaWVudFZhbGlkYXRpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYnJvd3NlclZhbGlkYXRlID09PSB0cnVlICYmIHRoaXMuZm9ybSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5jaGVja1ZhbGlkaXR5KCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgdGhlIEFKQVggcXVlcnkuXG4gICAgICpcbiAgICAgKiBSZXR1cm5zIGEgUHJvbWlzZSBvYmplY3QgZm9yIHdoZW4gdGhlIEFKQVggcmVxdWVzdCBpcyBjb21wbGV0ZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBkb0FqYXgoKSB7XG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIHRoZSBBSkFYIHJlcXVlc3QgYmVmb3JlIHNlbmRpbmdcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4QmVmb3JlU2VuZCcsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgY2FuY2VsbGVkOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhamF4UHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RmV0Y2goKS50aGVuKFxuICAgICAgICAgICAgICAgIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rICYmIHJlc3BvbnNlLnN0YXR1cyAhPT0gNDA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpICYmIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKS5pbmNsdWRlcygnL2pzb24nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmpzb24oKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VEYXRhLm1lc3NhZ2UgJiYgcmVzcG9uc2VEYXRhLmV4Y2VwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEubWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLmV4Y2VwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhLmZpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YS5saW5lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEudHJhY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcGFyc2UgSlNPTiByZXNwb25zZTogJHtlcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXNwb25zZVRleHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKHJlc3BvbnNlVGV4dCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcHJvY2VzcyByZXNwb25zZTogJHtlcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5oZWFkZXJzLmhhcygnQ29udGVudC1UeXBlJykgJiYgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLmluY2x1ZGVzKCcvanNvbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5qc29uKCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzcG9uc2VEYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWF9XSU5URVJfU1VDQ0VTUzogcmVzcG9uc2Uuc3RhdHVzICE9PSA0MDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBYX1dJTlRFUl9SRVNQT05TRV9DT0RFOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh0aGlzLnJlbmRlckVycm9yKGBVbmFibGUgdG8gcGFyc2UgSlNPTiByZXNwb25zZTogJHtlcnJvcn1gKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS50ZXh0KCkudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHByb2Nlc3MgcmVzcG9uc2U6ICR7ZXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAocmVzcG9uc2VFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5yZW5kZXJFcnJvcihgVW5hYmxlIHRvIHJldHJpZXZlIGEgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyOiAke3Jlc3BvbnNlRXJyb3J9YCkpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFN0YXJ0JywgYWpheFByb21pc2UsIHRoaXMpO1xuXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4UHJvbWlzZScpO1xuICAgICAgICAgICAgZXZlbnQucHJvbWlzZSA9IGFqYXhQcm9taXNlO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFqYXhQcm9taXNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZXBhcmVzIGZvciB1cGRhdGluZyB0aGUgcGFydGlhbHMgZnJvbSB0aGUgQUpBWCByZXNwb25zZS5cbiAgICAgKlxuICAgICAqIElmIGFueSBwYXJ0aWFscyBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgQUpBWCByZXNwb25zZSwgdGhpcyBtZXRob2Qgd2lsbCBhbHNvIGFjdGlvbiB0aGUgcGFydGlhbCB1cGRhdGVzLlxuICAgICAqXG4gICAgICogUmV0dXJucyBhIFByb21pc2Ugb2JqZWN0IHdoaWNoIHRyYWNrcyB3aGVuIHRoZSBwYXJ0aWFsIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSByZXNwb25zZVxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIHByb2Nlc3NVcGRhdGUocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmJlZm9yZVVwZGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYmVmb3JlVXBkYXRlLmFwcGx5KHRoaXMsIFtyZXNwb25zZV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEV4dHJhY3QgcGFydGlhbCBpbmZvcm1hdGlvblxuICAgICAgICAgICAgY29uc3QgcGFydGlhbHMgPSB7fTtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHJlc3BvbnNlKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICAgICAgaWYgKGtleS5zdWJzdHIoMCwgOCkgIT09ICdYX1dJTlRFUicpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbHNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMocGFydGlhbHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5YX1dJTlRFUl9BU1NFVFMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzQXNzZXRzKHJlc3BvbnNlLlhfV0lOVEVSX0FTU0VUUykudGhlbihcbiAgICAgICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcHJvbWlzZXMgPSB0aGlzLnNub3dib2FyZC5nbG9iYWxQcm9taXNlRXZlbnQoJ2FqYXhCZWZvcmVVcGRhdGUnLCByZXNwb25zZSwgdGhpcyk7XG4gICAgICAgICAgICBwcm9taXNlcy50aGVuKFxuICAgICAgICAgICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLlhfV0lOVEVSX0FTU0VUUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wcm9jZXNzQXNzZXRzKHJlc3BvbnNlLlhfV0lOVEVSX0FTU0VUUyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvVXBkYXRlKHBhcnRpYWxzKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsbG93IGZvciBIVE1MIHJlZHJhd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gcmVzb2x2ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIHBhcnRpYWxzIHdpdGggdGhlIGdpdmVuIGNvbnRlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcGFydGlhbHNcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBkb1VwZGF0ZShwYXJ0aWFscykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFmZmVjdGVkID0gW107XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHBhcnRpYWxzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtwYXJ0aWFsLCBjb250ZW50XSA9IGVudHJ5O1xuXG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdG9yID0gKHRoaXMub3B0aW9ucy51cGRhdGUgJiYgdGhpcy5vcHRpb25zLnVwZGF0ZVtwYXJ0aWFsXSlcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLm9wdGlvbnMudXBkYXRlW3BhcnRpYWxdXG4gICAgICAgICAgICAgICAgICAgIDogcGFydGlhbDtcblxuICAgICAgICAgICAgICAgIGxldCBtb2RlID0gJ3JlcGxhY2UnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSA9PT0gJ0AnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSAnYXBwZW5kJztcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvci5zdWJzdHIoMCwgMSkgPT09ICdeJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RlID0gJ3ByZXBlbmQnO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSAhPT0gJyMnICYmIHNlbGVjdG9yLnN1YnN0cigwLCAxKSAhPT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGUgPSAnbm9vcCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdhcHBlbmQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCArPSBjb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwcmVwZW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBjb250ZW50ICsgZWxlbWVudC5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ25vb3AnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBhZmZlY3RlZC5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXJlIHVwZGF0ZSBldmVudCBmb3IgZWFjaCBlbGVtZW50IHRoYXQgaXMgdXBkYXRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhVcGRhdGUnLCBlbGVtZW50LCBjb250ZW50LCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4VXBkYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5jb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFVwZGF0ZUNvbXBsZXRlJywgYWZmZWN0ZWQsIHRoaXMpO1xuXG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyB0aGUgcmVzcG9uc2UgZGF0YS5cbiAgICAgKlxuICAgICAqIFRoaXMgZmlyZXMgb2ZmIGFsbCBuZWNlc3NhcnkgcHJvY2Vzc2luZyBmdW5jdGlvbnMgZGVwZW5kaW5nIG9uIHRoZSByZXNwb25zZSwgaWUuIGlmIHRoZXJlJ3MgYW55IGZsYXNoXG4gICAgICogbWVzc2FnZXMgdG8gaGFuZGxlLCBvciBhbnkgcmVkaXJlY3RzIHRvIGJlIHVuZGVydGFrZW4uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gcmVzcG9uc2VcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdWNjZXNzICYmIHR5cGVvZiB0aGlzLm9wdGlvbnMuc3VjY2VzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5zdWNjZXNzKHRoaXMucmVzcG9uc2VEYXRhLCB0aGlzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBbGxvdyBwbHVnaW5zIHRvIGNhbmNlbCBhbnkgZnVydGhlciByZXNwb25zZSBoYW5kbGluZ1xuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhTdWNjZXNzJywgdGhpcy5yZXNwb25zZURhdGEsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgdGhlIGVsZW1lbnQgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIHJlc3BvbnNlIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4RG9uZScsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbnNlRGF0YSA9IHRoaXMucmVzcG9uc2VEYXRhO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2ggJiYgcmVzcG9uc2UuWF9XSU5URVJfRkxBU0hfTUVTU0FHRVMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ZsYXNoTWVzc2FnZXMocmVzcG9uc2UuWF9XSU5URVJfRkxBU0hfTUVTU0FHRVMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGEgcmVkaXJlY3QgZnJvbSB0aGUgcmVzcG9uc2UsIG9yIHVzZSB0aGUgcmVkaXJlY3QgYXMgc3BlY2lmaWVkIGluIHRoZSBvcHRpb25zLlxuICAgICAgICBpZiAodGhpcy5yZWRpcmVjdCB8fCByZXNwb25zZS5YX1dJTlRFUl9SRURJUkVDVCkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUmVkaXJlY3QodGhpcy5yZWRpcmVjdCB8fCByZXNwb25zZS5YX1dJTlRFUl9SRURJUkVDVCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2Vzc2VzIGFuIGVycm9yIHJlc3BvbnNlIGZyb20gdGhlIEFKQVggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIFRoaXMgZmlyZXMgb2ZmIGFsbCBuZWNlc3NhcnkgcHJvY2Vzc2luZyBmdW5jdGlvbnMgZGVwZW5kaW5nIG9uIHRoZSBlcnJvciByZXNwb25zZSwgaWUuIGlmIHRoZXJlJ3MgYW55IGVycm9yIG9yXG4gICAgICogdmFsaWRhdGlvbiBtZXNzYWdlcyB0byBoYW5kbGUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdHxFcnJvcn0gZXJyb3JcbiAgICAgKi9cbiAgICBwcm9jZXNzRXJyb3IoZXJyb3IpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5lcnJvciAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmVycm9yKHRoaXMucmVzcG9uc2VFcnJvciwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgYW55IGZ1cnRoZXIgZXJyb3IgaGFuZGxpbmdcbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4RXJyb3InLCB0aGlzLnJlc3BvbnNlRXJyb3IsIHRoaXMpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgdGhlIGVsZW1lbnQgdG8gY2FuY2VsIGFueSBmdXJ0aGVyIGVycm9yIGhhbmRsaW5nXG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gbmV3IEV2ZW50KCdhamF4RmFpbCcsIHsgY2FuY2VsYWJsZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbnNlRXJyb3IgPSB0aGlzLnJlc3BvbnNlRXJyb3I7XG4gICAgICAgICAgICBldmVudC5yZXF1ZXN0ID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3JNZXNzYWdlKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNraXBFcnJvciA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHZhbGlkYXRpb24gZXJyb3JzXG4gICAgICAgICAgICBpZiAoZXJyb3IuWF9XSU5URVJfRVJST1JfRklFTERTKSB7XG4gICAgICAgICAgICAgICAgc2tpcEVycm9yID0gdGhpcy5wcm9jZXNzVmFsaWRhdGlvbkVycm9ycyhlcnJvci5YX1dJTlRFUl9FUlJPUl9GSUVMRFMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXJyb3IuWF9XSU5URVJfRVJST1JfTUVTU0FHRSAmJiAhc2tpcEVycm9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzRXJyb3JNZXNzYWdlKGVycm9yLlhfV0lOVEVSX0VSUk9SX01FU1NBR0UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyBhIHJlZGlyZWN0IHJlc3BvbnNlLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgdGhpcyBwcm9jZXNzb3Igd2lsbCBzaW1wbHkgcmVkaXJlY3QgdGhlIHVzZXIgaW4gdGhlaXIgYnJvd3Nlci5cbiAgICAgKlxuICAgICAqIFBsdWdpbnMgY2FuIGF1Z21lbnQgdGhpcyBmdW5jdGlvbmFsaXR5IGZyb20gdGhlIGBhamF4UmVkaXJlY3RgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5IG9uXG4gICAgICogYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlUmVkaXJlY3RSZXNwb25zZWAgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIHJlZGlyZWN0IHdpbGwgYmUgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHByb2Nlc3NSZWRpcmVjdCh1cmwpIHtcbiAgICAgICAgLy8gUnVuIGEgY3VzdG9tIHBlci1yZXF1ZXN0IHJlZGlyZWN0IGhhbmRsZXIuIElmIGZhbHNlIGlzIHJldHVybmVkLCBkb24ndCBydW4gdGhlIHJlZGlyZWN0LlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVSZWRpcmVjdFJlc3BvbnNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZVJlZGlyZWN0UmVzcG9uc2UuYXBwbHkodGhpcywgW3VybF0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIHRoZSByZWRpcmVjdFxuICAgICAgICBpZiAodGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhSZWRpcmVjdCcsIHVybCwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbmRpY2F0ZSB0aGF0IHRoZSBBSkFYIHJlcXVlc3QgaXMgZmluaXNoZWQgaWYgd2UncmUgc3RpbGwgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBsb2FkaW5nIGluZGljYXRvciBmb3IgcmVkaXJlY3RzIHRoYXQganVzdCBjaGFuZ2UgdGhlIGhhc2ggdmFsdWUgb2ZcbiAgICAgICAgLy8gdGhlIFVSTCBpbnN0ZWFkIG9mIGxlYXZpbmcgdGhlIHBhZ2Ugd2lsbCBwcm9wZXJseSBzdG9wLlxuICAgICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9vY3RvYmVyY21zL29jdG9iZXIvaXNzdWVzLzI3ODBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgICAgICAgICAgICAgZXZlbnQuZXZlbnROYW1lID0gJ2FqYXhSZWRpcmVjdGVkJztcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5hc3NpZ24odXJsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYW4gZXJyb3IgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoaXMgcHJvY2Vzc29yIHdpbGwgc2ltcGx5IGFsZXJ0IHRoZSB1c2VyIHRocm91Z2ggYSBzaW1wbGUgYGFsZXJ0KClgIGNhbGwuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheEVycm9yTWVzc2FnZWAgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVFcnJvck1lc3NhZ2VgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLCB0aGVcbiAgICAgKiBlcnJvciBtZXNzYWdlIGhhbmRsaW5nIHdpbGwgYmUgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBwcm9jZXNzRXJyb3JNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgLy8gUnVuIGEgY3VzdG9tIHBlci1yZXF1ZXN0IGhhbmRsZXIgZm9yIGVycm9yIG1lc3NhZ2VzLiBJZiBmYWxzZSBpcyByZXR1cm5lZCwgZG8gbm90IHByb2Nlc3MgdGhlIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgIC8vIGFueSBmdXJ0aGVyLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVFcnJvck1lc3NhZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlRXJyb3JNZXNzYWdlLmFwcGx5KHRoaXMsIFttZXNzYWdlXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBjYW5jZWwgdGhlIGVycm9yIG1lc3NhZ2UgYmVpbmcgc2hvd25cbiAgICAgICAgaWYgKHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4RXJyb3JNZXNzYWdlJywgbWVzc2FnZSwgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCeSBkZWZhdWx0LCBzaG93IGEgYnJvd3NlciBlcnJvciBtZXNzYWdlXG4gICAgICAgIHdpbmRvdy5hbGVydChtZXNzYWdlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgZmxhc2ggbWVzc2FnZXMgZnJvbSB0aGUgcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBCeSBkZWZhdWx0LCBubyBmbGFzaCBtZXNzYWdlIGhhbmRsaW5nIHdpbGwgb2NjdXIuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheEZsYXNoTWVzc2FnZXNgIGV2ZW50LiBZb3UgbWF5IGFsc28gb3ZlcnJpZGUgdGhpcyBmdW5jdGlvbmFsaXR5XG4gICAgICogb24gYSBwZXItcmVxdWVzdCBiYXNpcyB0aHJvdWdoIHRoZSBgaGFuZGxlRmxhc2hNZXNzYWdlc2AgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsIHRoZVxuICAgICAqIGZsYXNoIG1lc3NhZ2UgaGFuZGxpbmcgd2lsbCBiZSBjYW5jZWxsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gbWVzc2FnZXNcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIHByb2Nlc3NGbGFzaE1lc3NhZ2VzKG1lc3NhZ2VzKSB7XG4gICAgICAgIC8vIFJ1biBhIGN1c3RvbSBwZXItcmVxdWVzdCBmbGFzaCBoYW5kbGVyLiBJZiBmYWxzZSBpcyByZXR1cm5lZCwgZG9uJ3Qgc2hvdyB0aGUgZmxhc2ggbWVzc2FnZVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5oYW5kbGVGbGFzaE1lc3NhZ2VzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmhhbmRsZUZsYXNoTWVzc2FnZXMuYXBwbHkodGhpcywgW21lc3NhZ2VzXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2FqYXhGbGFzaE1lc3NhZ2VzJywgbWVzc2FnZXMsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyB2YWxpZGF0aW9uIGVycm9ycyBmb3IgZmllbGRzLlxuICAgICAqXG4gICAgICogQnkgZGVmYXVsdCwgbm8gdmFsaWRhdGlvbiBlcnJvciBoYW5kbGluZyB3aWxsIG9jY3VyLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhWYWxpZGF0aW9uRXJyb3JzYCBldmVudC4gWW91IG1heSBhbHNvIG92ZXJyaWRlIHRoaXMgZnVuY3Rpb25hbGl0eVxuICAgICAqIG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgdGhyb3VnaCB0aGUgYGhhbmRsZVZhbGlkYXRpb25FcnJvcnNgIGNhbGxiYWNrIG9wdGlvbi4gSWYgYSBgZmFsc2VgIGlzIHJldHVybmVkIGZyb20gZWl0aGVyLCB0aGVcbiAgICAgKiB2YWxpZGF0aW9uIGVycm9yIGhhbmRsaW5nIHdpbGwgYmUgY2FuY2VsbGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGZpZWxkc1xuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgcHJvY2Vzc1ZhbGlkYXRpb25FcnJvcnMoZmllbGRzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLmhhbmRsZVZhbGlkYXRpb25FcnJvcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlVmFsaWRhdGlvbkVycm9ycy5hcHBseSh0aGlzLCBbdGhpcy5mb3JtLCBmaWVsZHNdKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gY2FuY2VsIHRoZSB2YWxpZGF0aW9uIGVycm9ycyBiZWluZyBoYW5kbGVkXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYWpheFZhbGlkYXRpb25FcnJvcnMnLCB0aGlzLmZvcm0sIGZpZWxkcywgdGhpcykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYXNzZXRzIHJldHVybmVkIGJ5IGFuIEFKQVggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEJ5IGRlZmF1bHQsIG5vIGFzc2V0IHByb2Nlc3Npbmcgd2lsbCBvY2N1ciBhbmQgdGhpcyB3aWxsIHJldHVybiBhIHJlc29sdmVkIFByb21pc2UuXG4gICAgICpcbiAgICAgKiBQbHVnaW5zIGNhbiBhdWdtZW50IHRoaXMgZnVuY3Rpb25hbGl0eSBmcm9tIHRoZSBgYWpheExvYWRBc3NldHNgIGV2ZW50LiBUaGlzIGV2ZW50IGlzIGNvbnNpZGVyZWQgYmxvY2tpbmcsIGFuZFxuICAgICAqIGFsbG93cyBhc3NldHMgdG8gYmUgbG9hZGVkIG9yIHByb2Nlc3NlZCBiZWZvcmUgY29udGludWluZyB3aXRoIGFueSBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXNzZXRzXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgcHJvY2Vzc0Fzc2V0cyhhc3NldHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc25vd2JvYXJkLmdsb2JhbFByb21pc2VFdmVudCgnYWpheExvYWRBc3NldHMnLCBhc3NldHMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpcm1zIHRoZSByZXF1ZXN0IHdpdGggdGhlIHVzZXIgYmVmb3JlIHByb2NlZWRpbmcuXG4gICAgICpcbiAgICAgKiBUaGlzIGlzIGFuIGFzeW5jaHJvbm91cyBtZXRob2QuIEJ5IGRlZmF1bHQsIGl0IHdpbGwgdXNlIHRoZSBicm93c2VyJ3MgYGNvbmZpcm0oKWAgbWV0aG9kIHRvIHF1ZXJ5IHRoZSB1c2VyIHRvXG4gICAgICogY29uZmlybSB0aGUgYWN0aW9uLiBUaGlzIG1ldGhvZCB3aWxsIHJldHVybiBhIFByb21pc2Ugd2l0aCBhIGJvb2xlYW4gdmFsdWUgZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHVzZXIgY29uZmlybWVkXG4gICAgICogb3Igbm90LlxuICAgICAqXG4gICAgICogUGx1Z2lucyBjYW4gYXVnbWVudCB0aGlzIGZ1bmN0aW9uYWxpdHkgZnJvbSB0aGUgYGFqYXhDb25maXJtTWVzc2FnZWAgZXZlbnQuIFlvdSBtYXkgYWxzbyBvdmVycmlkZSB0aGlzIGZ1bmN0aW9uYWxpdHlcbiAgICAgKiBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIHRocm91Z2ggdGhlIGBoYW5kbGVDb25maXJtTWVzc2FnZWAgY2FsbGJhY2sgb3B0aW9uLiBJZiBhIGBmYWxzZWAgaXMgcmV0dXJuZWQgZnJvbSBlaXRoZXIsXG4gICAgICogdGhlIGNvbmZpcm1hdGlvbiBpcyBhc3N1bWVkIHRvIGhhdmUgYmVlbiBkZW5pZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBhc3luYyBkb0NvbmZpcm0oKSB7XG4gICAgICAgIC8vIEFsbG93IGZvciBhIGN1c3RvbSBoYW5kbGVyIGZvciB0aGUgY29uZmlybWF0aW9uLCBwZXIgcmVxdWVzdC5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuaGFuZGxlQ29uZmlybU1lc3NhZ2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGFuZGxlQ29uZmlybU1lc3NhZ2UuYXBwbHkodGhpcywgW3RoaXMuY29uZmlybV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBubyBwbHVnaW5zIGhhdmUgY3VzdG9taXNlZCB0aGUgY29uZmlybWF0aW9uLCB1c2UgYSBzaW1wbGUgYnJvd3NlciBjb25maXJtYXRpb24uXG4gICAgICAgIGlmICh0aGlzLnNub3dib2FyZC5saXN0ZW5zVG9FdmVudCgnYWpheENvbmZpcm1NZXNzYWdlJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmNvbmZpcm0odGhpcy5jb25maXJtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJ1biBjdXN0b20gcGx1Z2luIGNvbmZpcm1hdGlvbnNcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSB0aGlzLnNub3dib2FyZC5nbG9iYWxQcm9taXNlRXZlbnQoJ2FqYXhDb25maXJtTWVzc2FnZScsIHRoaXMuY29uZmlybSwgdGhpcyk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IGZ1bGZpbGxlZCA9IGF3YWl0IHByb21pc2VzO1xuICAgICAgICAgICAgaWYgKGZ1bGZpbGxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRmlyZXMgb2ZmIGNvbXBsZXRpb24gZXZlbnRzIGZvciB0aGUgUmVxdWVzdC5cbiAgICAgKi9cbiAgICBjb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb21wbGV0ZSAmJiB0eXBlb2YgdGhpcy5vcHRpb25zLmNvbXBsZXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuY29tcGxldGUodGhpcy5yZXNwb25zZURhdGEsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhamF4RG9uZScsIHRoaXMucmVzcG9uc2VEYXRhLCB0aGlzKTtcblxuICAgICAgICBpZiAodGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IG5ldyBFdmVudCgnYWpheEFsd2F5cycpO1xuICAgICAgICAgICAgZXZlbnQucmVxdWVzdCA9IHRoaXM7XG4gICAgICAgICAgICBldmVudC5yZXNwb25zZURhdGEgPSB0aGlzLnJlc3BvbnNlRGF0YTtcbiAgICAgICAgICAgIGV2ZW50LnJlc3BvbnNlRXJyb3IgPSB0aGlzLnJlc3BvbnNlRXJyb3I7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJlIG9mZiB0aGUgZGVzdHJ1Y3RvclxuICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgZ2V0IGZvcm0oKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZm9ybSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZm9ybSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLm9wdGlvbnMuZm9ybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmZvcm07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPUk0nKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgfVxuXG4gICAgZ2V0IGNvbnRleHQoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoYW5kbGVyOiB0aGlzLmhhbmRsZXIsXG4gICAgICAgICAgICBvcHRpb25zOiB0aGlzLm9wdGlvbnMsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0IGhlYWRlcnMoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsIC8vIEtlZXBzIGNvbXBhdGliaWxpdHkgd2l0aCBqUXVlcnkgQUpBWFxuICAgICAgICAgICAgJ1gtV0lOVEVSLVJFUVVFU1QtSEFORExFUic6IHRoaXMuaGFuZGxlcixcbiAgICAgICAgICAgICdYLVdJTlRFUi1SRVFVRVNULVBBUlRJQUxTJzogdGhpcy5leHRyYWN0UGFydGlhbHModGhpcy5vcHRpb25zLnVwZGF0ZSB8fCBbXSksXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuZmxhc2gpIHtcbiAgICAgICAgICAgIGhlYWRlcnNbJ1gtV0lOVEVSLVJFUVVFU1QtRkxBU0gnXSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy54c3JmVG9rZW4pIHtcbiAgICAgICAgICAgIGhlYWRlcnNbJ1gtWFNSRi1UT0tFTiddID0gdGhpcy54c3JmVG9rZW47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGVhZGVycztcbiAgICB9XG5cbiAgICBnZXQgbG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5sb2FkaW5nIHx8IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCB1cmwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMudXJsIHx8IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH1cblxuICAgIGdldCByZWRpcmVjdCgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLm9wdGlvbnMucmVkaXJlY3QgJiYgdGhpcy5vcHRpb25zLnJlZGlyZWN0Lmxlbmd0aCkgPyB0aGlzLm9wdGlvbnMucmVkaXJlY3QgOiBudWxsO1xuICAgIH1cblxuICAgIGdldCBmbGFzaCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5mbGFzaCB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICBnZXQgZmlsZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuZmlsZXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChGb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZGVidWcoJ1RoaXMgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGZpbGUgdXBsb2FkcycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IHhzcmZUb2tlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc25vd2JvYXJkLmNvb2tpZSgpLmdldCgnWFNSRi1UT0tFTicpO1xuICAgIH1cblxuICAgIGdldCBkYXRhKCkge1xuICAgICAgICBjb25zdCBkYXRhID0gKHR5cGVvZiB0aGlzLm9wdGlvbnMuZGF0YSA9PT0gJ29iamVjdCcpID8gdGhpcy5vcHRpb25zLmRhdGEgOiB7fTtcblxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0gfHwgdW5kZWZpbmVkKTtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRhdGEpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9ybURhdGE7XG4gICAgfVxuXG4gICAgZ2V0IGNvbmZpcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29uZmlybSB8fCBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyBwYXJ0aWFscy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1cGRhdGVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGV4dHJhY3RQYXJ0aWFscyh1cGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHVwZGF0ZSkuam9pbignJicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgYW4gZXJyb3Igd2l0aCB1c2VmdWwgZGVidWcgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyB1c2VkIGludGVybmFsbHkgd2hlbiB0aGUgQUpBWCByZXF1ZXN0IGNvdWxkIG5vdCBiZSBjb21wbGV0ZWQgb3IgcHJvY2Vzc2VkIGNvcnJlY3RseSBkdWUgdG8gYW4gZXJyb3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBleGNlcHRpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBsaW5lXG4gICAgICogQHBhcmFtIHtzdHJpbmdbXX0gdHJhY2VcbiAgICAgKiBAcmV0dXJucyB7RXJyb3J9XG4gICAgICovXG4gICAgcmVuZGVyRXJyb3IobWVzc2FnZSwgZXhjZXB0aW9uLCBmaWxlLCBsaW5lLCB0cmFjZSkge1xuICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgZXJyb3IuZXhjZXB0aW9uID0gZXhjZXB0aW9uIHx8IG51bGw7XG4gICAgICAgIGVycm9yLmZpbGUgPSBmaWxlIHx8IG51bGw7XG4gICAgICAgIGVycm9yLmxpbmUgPSBsaW5lIHx8IG51bGw7XG4gICAgICAgIGVycm9yLnRyYWNlID0gdHJhY2UgfHwgW107XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgYSBnaXZlbiBzdHJpbmcgdG8gc2VlIGlmIGl0IGlzIGEgdmFsaWQgQUpBWCBoYW5kbGVyIG5hbWUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGlzSGFuZGxlck5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gL14oPzpcXHcrOnsyfSk/b25bQS1aMC05XS8udGVzdChuYW1lKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uLy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEVuYWJsZSBEYXRhIEF0dHJpYnV0ZXMgQVBJIGZvciBBSkFYIHJlcXVlc3RzLlxuICpcbiAqIFRoaXMgaXMgYW4gZXh0ZW5zaW9uIG9mIHRoZSBiYXNlIEFKQVggZnVuY3Rpb25hbGl0eSB0aGF0IGluY2x1ZGVzIGhhbmRsaW5nIG9mIEhUTUwgZGF0YSBhdHRyaWJ1dGVzIGZvciBwcm9jZXNzaW5nXG4gKiBBSkFYIHJlcXVlc3RzLiBJdCBpcyBzZXBhcmF0ZWQgZnJvbSB0aGUgYmFzZSBBSkFYIGZ1bmN0aW9uYWxpdHkgdG8gYWxsb3cgZGV2ZWxvcGVycyB0byBvcHQtb3V0IG9mIGRhdGEgYXR0cmlidXRlXG4gKiByZXF1ZXN0cyBpZiB0aGV5IGRvIG5vdCBpbnRlbmQgdG8gdXNlIHRoZW0uXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJpYnV0ZVJlcXVlc3QgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIExpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICAgICAgYWpheFNldHVwOiAnb25BamF4U2V0dXAnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlYWR5IGV2ZW50IGNhbGxiYWNrLlxuICAgICAqXG4gICAgICogQXR0YWNoZXMgaGFuZGxlcnMgdG8gdGhlIHdpbmRvdyB0byBsaXN0ZW4gZm9yIGFsbCByZXF1ZXN0IGludGVyYWN0aW9ucy5cbiAgICAgKi9cbiAgICByZWFkeSgpIHtcbiAgICAgICAgdGhpcy5hdHRhY2hIYW5kbGVycygpO1xuICAgICAgICB0aGlzLmRpc2FibGVEZWZhdWx0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRlbmNpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydyZXF1ZXN0JywgJ2pzb25QYXJzZXInXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cnVjdG9yLlxuICAgICAqXG4gICAgICogRGV0YWNoZXMgYWxsIGhhbmRsZXJzLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRldGFjaEhhbmRsZXJzKCk7XG5cbiAgICAgICAgc3VwZXIuZGVzdHJ1Y3QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0aGUgbmVjZXNzYXJ5IGhhbmRsZXJzIGZvciBhbGwgcmVxdWVzdCBpbnRlcmFjdGlvbnMuXG4gICAgICovXG4gICAgYXR0YWNoSGFuZGxlcnMoKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLmtleURvd25IYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHRoaXMuc3VibWl0SGFuZGxlcihldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERpc2FibGVzIGRlZmF1bHQgZm9ybSB2YWxpZGF0aW9uIGZvciBBSkFYIGZvcm1zLlxuICAgICAqXG4gICAgICogQSBmb3JtIHRoYXQgY29udGFpbnMgYSBgZGF0YS1yZXF1ZXN0YCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBhbiBBSkFYIGNhbGwgd2l0aG91dCBpbmNsdWRpbmcgYSBgZGF0YS1icm93c2VyLXZhbGlkYXRlYFxuICAgICAqIGF0dHJpYnV0ZSBtZWFucyB0aGF0IHRoZSBBSkFYIGNhbGxiYWNrIGZ1bmN0aW9uIHdpbGwgbGlrZWx5IGJlIGhhbmRsaW5nIHRoZSB2YWxpZGF0aW9uIGluc3RlYWQuXG4gICAgICovXG4gICAgZGlzYWJsZURlZmF1bHRGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybVtkYXRhLXJlcXVlc3RdOm5vdChbZGF0YS1icm93c2VyLXZhbGlkYXRlXSknKS5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICAgICAgICBmb3JtLnNldEF0dHJpYnV0ZSgnbm92YWxpZGF0ZScsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRhY2hlcyB0aGUgbmVjZXNzYXJ5IGhhbmRsZXJzIGZvciBhbGwgcmVxdWVzdCBpbnRlcmFjdGlvbnMuXG4gICAgICovXG4gICAgZGV0YWNoSGFuZGxlcnMoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHRoaXMuY2hhbmdlSGFuZGxlcihldmVudCkpO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHRoaXMuY2xpY2tIYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB0aGlzLmtleURvd25IYW5kbGVyKGV2ZW50KSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHRoaXMuc3VibWl0SGFuZGxlcihldmVudCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZXMgY2hhbmdlcyB0byBzZWxlY3QsIHJhZGlvLCBjaGVja2JveCBhbmQgZmlsZSBpbnB1dHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIGNoYW5nZUhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB3ZSBhcmUgY2hhbmdpbmcgYSB2YWxpZCBlbGVtZW50XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXG4gICAgICAgICAgICAnc2VsZWN0W2RhdGEtcmVxdWVzdF0sIGlucHV0W3R5cGU9cmFkaW9dW2RhdGEtcmVxdWVzdF0sIGlucHV0W3R5cGU9Y2hlY2tib3hdW2RhdGEtcmVxdWVzdF0sIGlucHV0W3R5cGU9ZmlsZV1bZGF0YS1yZXF1ZXN0XScsXG4gICAgICAgICkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGNsaWNrcyBvbiBoeXBlcmxpbmtzIGFuZCBidXR0b25zLlxuICAgICAqXG4gICAgICogVGhpcyBldmVudCBjYW4gYnViYmxlIHVwIHRoZSBoaWVyYXJjaHkgdG8gZmluZCBhIHN1aXRhYmxlIHJlcXVlc3QgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAgY2xpY2tIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIGxldCBjdXJyZW50RWxlbWVudCA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICB3aGlsZSAoY3VycmVudEVsZW1lbnQgJiYgY3VycmVudEVsZW1lbnQudGFnTmFtZSAhPT0gJ0hUTUwnKSB7XG4gICAgICAgICAgICBpZiAoIWN1cnJlbnRFbGVtZW50Lm1hdGNoZXMoXG4gICAgICAgICAgICAgICAgJ2FbZGF0YS1yZXF1ZXN0XSwgYnV0dG9uW2RhdGEtcmVxdWVzdF0sIGlucHV0W3R5cGU9YnV0dG9uXVtkYXRhLXJlcXVlc3RdLCBpbnB1dFt0eXBlPXN1Ym1pdF1bZGF0YS1yZXF1ZXN0XScsXG4gICAgICAgICAgICApKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQgPSBjdXJyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoY3VycmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlcyBrZXkgcHJlc3NlcyBvbiBpbnB1dHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50XG4gICAgICovXG4gICAga2V5RG93bkhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB3ZSBhcmUgaW5wdXR0aW5nIGludG8gYSB2YWxpZCBlbGVtZW50XG4gICAgICAgIGlmICghZXZlbnQudGFyZ2V0Lm1hdGNoZXMoXG4gICAgICAgICAgICAnaW5wdXQnLFxuICAgICAgICApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBpbnB1dCB0eXBlIGlzIHZhbGlkXG4gICAgICAgIGNvbnN0IHZhbGlkVHlwZXMgPSBbXG4gICAgICAgICAgICAnY2hlY2tib3gnLFxuICAgICAgICAgICAgJ2NvbG9yJyxcbiAgICAgICAgICAgICdkYXRlJyxcbiAgICAgICAgICAgICdkYXRldGltZScsXG4gICAgICAgICAgICAnZGF0ZXRpbWUtbG9jYWwnLFxuICAgICAgICAgICAgJ2VtYWlsJyxcbiAgICAgICAgICAgICdpbWFnZScsXG4gICAgICAgICAgICAnbW9udGgnLFxuICAgICAgICAgICAgJ251bWJlcicsXG4gICAgICAgICAgICAncGFzc3dvcmQnLFxuICAgICAgICAgICAgJ3JhZGlvJyxcbiAgICAgICAgICAgICdyYW5nZScsXG4gICAgICAgICAgICAnc2VhcmNoJyxcbiAgICAgICAgICAgICd0ZWwnLFxuICAgICAgICAgICAgJ3RleHQnLFxuICAgICAgICAgICAgJ3RpbWUnLFxuICAgICAgICAgICAgJ3VybCcsXG4gICAgICAgICAgICAnd2VlaycsXG4gICAgICAgIF07XG4gICAgICAgIGlmICh2YWxpZFR5cGVzLmluZGV4T2YoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndHlwZScpKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicgJiYgZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJypbZGF0YS1yZXF1ZXN0XScpKSB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJypbZGF0YS10cmFjay1pbnB1dF0nKSkge1xuICAgICAgICAgICAgdGhpcy50cmFja0lucHV0KGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGVzIGZvcm0gc3VibWlzc2lvbnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudFxuICAgICAqL1xuICAgIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCB3ZSBhcmUgc3VibWl0dGluZyBhIHZhbGlkIGZvcm1cbiAgICAgICAgaWYgKCFldmVudC50YXJnZXQubWF0Y2hlcyhcbiAgICAgICAgICAgICdmb3JtW2RhdGEtcmVxdWVzdF0nLFxuICAgICAgICApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzc1JlcXVlc3RPbkVsZW1lbnQoZXZlbnQudGFyZ2V0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQcm9jZXNzZXMgYSByZXF1ZXN0IG9uIGEgZ2l2ZW4gZWxlbWVudCwgdXNpbmcgaXRzIGRhdGEgYXR0cmlidXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICAgKi9cbiAgICBwcm9jZXNzUmVxdWVzdE9uRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBlbGVtZW50LmRhdGFzZXQ7XG5cbiAgICAgICAgY29uc3QgaGFuZGxlciA9IFN0cmluZyhkYXRhLnJlcXVlc3QpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgY29uZmlybTogKCdyZXF1ZXN0Q29uZmlybScgaW4gZGF0YSkgPyBTdHJpbmcoZGF0YS5yZXF1ZXN0Q29uZmlybSkgOiBudWxsLFxuICAgICAgICAgICAgcmVkaXJlY3Q6ICgncmVxdWVzdFJlZGlyZWN0JyBpbiBkYXRhKSA/IFN0cmluZyhkYXRhLnJlcXVlc3RSZWRpcmVjdCkgOiBudWxsLFxuICAgICAgICAgICAgbG9hZGluZzogKCdyZXF1ZXN0TG9hZGluZycgaW4gZGF0YSkgPyBTdHJpbmcoZGF0YS5yZXF1ZXN0TG9hZGluZykgOiBudWxsLFxuICAgICAgICAgICAgZmxhc2g6ICgncmVxdWVzdEZsYXNoJyBpbiBkYXRhKSxcbiAgICAgICAgICAgIGZpbGVzOiAoJ3JlcXVlc3RGaWxlcycgaW4gZGF0YSksXG4gICAgICAgICAgICBicm93c2VyVmFsaWRhdGU6ICgncmVxdWVzdEJyb3dzZXJWYWxpZGF0ZScgaW4gZGF0YSksXG4gICAgICAgICAgICBmb3JtOiAoJ3JlcXVlc3RGb3JtJyBpbiBkYXRhKSA/IFN0cmluZyhkYXRhLnJlcXVlc3RGb3JtKSA6IG51bGwsXG4gICAgICAgICAgICB1cmw6ICgncmVxdWVzdFVybCcgaW4gZGF0YSkgPyBTdHJpbmcoZGF0YS5yZXF1ZXN0VXJsKSA6IG51bGwsXG4gICAgICAgICAgICB1cGRhdGU6ICgncmVxdWVzdFVwZGF0ZScgaW4gZGF0YSkgPyB0aGlzLnBhcnNlRGF0YShTdHJpbmcoZGF0YS5yZXF1ZXN0VXBkYXRlKSkgOiBbXSxcbiAgICAgICAgICAgIGRhdGE6ICgncmVxdWVzdERhdGEnIGluIGRhdGEpID8gdGhpcy5wYXJzZURhdGEoU3RyaW5nKGRhdGEucmVxdWVzdERhdGEpKSA6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLnJlcXVlc3QoZWxlbWVudCwgaGFuZGxlciwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhbiBBSkFYIHJlcXVlc3QgdmlhIEhUTUwgYXR0cmlidXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICAgICAqL1xuICAgIG9uQWpheFNldHVwKHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGZpZWxkTmFtZSA9IHJlcXVlc3QuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcblxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgLi4udGhpcy5nZXRQYXJlbnRSZXF1ZXN0RGF0YShyZXF1ZXN0LmVsZW1lbnQpLFxuICAgICAgICAgICAgLi4ucmVxdWVzdC5vcHRpb25zLmRhdGEsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudCAmJiByZXF1ZXN0LmVsZW1lbnQubWF0Y2hlcygnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QsIGJ1dHRvbicpICYmICFyZXF1ZXN0LmZvcm0gJiYgZmllbGROYW1lICYmICFyZXF1ZXN0Lm9wdGlvbnMuZGF0YVtmaWVsZE5hbWVdKSB7XG4gICAgICAgICAgICBkYXRhW2ZpZWxkTmFtZV0gPSByZXF1ZXN0LmVsZW1lbnQudmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0Lm9wdGlvbnMuZGF0YSA9IGRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGFuZCBjb2xsYXRlcyBhbGwgZGF0YSBmcm9tIGVsZW1lbnRzIHVwIHRoZSBET00gaGllcmFyY2h5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSB0YXJnZXRcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGdldFBhcmVudFJlcXVlc3REYXRhKHRhcmdldCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IFtdO1xuICAgICAgICBsZXQgZGF0YSA9IHt9O1xuICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSB0YXJnZXQ7XG5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudC50YWdOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzLnB1c2goY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50cy5yZXZlcnNlKCk7XG5cbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudERhdGEgPSBlbGVtZW50LmRhdGFzZXQ7XG5cbiAgICAgICAgICAgIGlmICgncmVxdWVzdERhdGEnIGluIGVsZW1lbnREYXRhKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wYXJzZURhdGEoZWxlbWVudERhdGEucmVxdWVzdERhdGEpLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBkYXRhIGluIHRoZSBXaW50ZXIvT2N0b2JlciBKU09OIGZvcm1hdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBkYXRhXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBwYXJzZURhdGEoZGF0YSkge1xuICAgICAgICBsZXQgdmFsdWU7XG5cbiAgICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5qc29ucGFyc2VyKCkucGFyc2UoYHske2RhdGF9fWApO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEVycm9yIHBhcnNpbmcgdGhlIGRhdGEgYXR0cmlidXRlIG9uIGVsZW1lbnQ6ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHJhY2tJbnB1dChlbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHsgbGFzdFZhbHVlIH0gPSBlbGVtZW50LmRhdGFzZXQ7XG4gICAgICAgIGNvbnN0IGludGVydmFsID0gZWxlbWVudC5kYXRhc2V0LnRyYWNrSW5wdXQgfHwgMzAwO1xuXG4gICAgICAgIGlmIChsYXN0VmFsdWUgIT09IHVuZGVmaW5lZCAmJiBsYXN0VmFsdWUgPT09IGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucmVzZXRUcmFja0lucHV0VGltZXIoZWxlbWVudCk7XG5cbiAgICAgICAgZWxlbWVudC5kYXRhc2V0LmlucHV0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhc2V0LnJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVHJhdmVyc2UgdXAgdGhlIGhpZXJhcmNoeSBhbmQgZmluZCBhIGZvcm0gdGhhdCBzZW5kcyBhbiBBSkFYIHF1ZXJ5XG4gICAgICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgJiYgY3VycmVudEVsZW1lbnQucGFyZW50RWxlbWVudC50YWdOYW1lICE9PSAnSFRNTCcpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudEVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPUk0nICYmIGN1cnJlbnRFbGVtZW50LmRhdGFzZXQucmVxdWVzdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSZXF1ZXN0T25FbGVtZW50KGN1cnJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBpbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgcmVzZXRUcmFja0lucHV0VGltZXIoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudC5kYXRhc2V0LmlucHV0VGltZXIpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoZWxlbWVudC5kYXRhc2V0LmlucHV0VGltZXIpO1xuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmlucHV0VGltZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBBc3NldCBMb2FkZXIuXG4gKlxuICogUHJvdmlkZXMgc2ltcGxlIGFzc2V0IGxvYWRpbmcgZnVuY3Rpb25hbGl0eSBmb3IgU25vd2JvYXJkLCBtYWtpbmcgaXQgZWFzeSB0byBwcmUtbG9hZCBpbWFnZXMgb3JcbiAqIGluY2x1ZGUgSmF2YVNjcmlwdCBvciBDU1MgYXNzZXRzIG9uIHRoZSBmbHkuXG4gKlxuICogQnkgZGVmYXVsdCwgdGhpcyBsb2FkZXIgd2lsbCBsaXN0ZW4gdG8gYW55IGFzc2V0cyB0aGF0IGhhdmUgYmVlbiByZXF1ZXN0ZWQgdG8gbG9hZCBpbiBhbiBBSkFYXG4gKiByZXNwb25zZSwgc3VjaCBhcyByZXNwb25zZXMgZnJvbSBhIGNvbXBvbmVudC5cbiAqXG4gKiBZb3UgY2FuIGFsc28gbG9hZCBhc3NldHMgbWFudWFsbHkgYnkgY2FsbGluZyB0aGUgZm9sbG93aW5nOlxuICpcbiAqIGBgYGpzXG4gKiBTbm93Ym9hcmQuYWRkUGx1Z2luKCdhc3NldExvYWRlcicsIEFzc2V0TG9hZGVyKTtcbiAqIFNub3dib2FyZC5hc3NldExvYWRlcigpLnByb2Nlc3NBc3NldHMoYXNzZXRzKTtcbiAqIGBgYFxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldExvYWRlciBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRXZlbnQgbGlzdGVuZXJzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAgKi9cbiAgICBsaXN0ZW5zKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWpheExvYWRBc3NldHM6ICdsb2FkJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXBlbmRlbmNpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgJ3VybCcsXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUHJvY2VzcyBhbmQgbG9hZCBhc3NldHMuXG4gICAgICpcbiAgICAgKiBUaGUgYGFzc2V0c2AgcHJvcGVydHkgb2YgdGhpcyBtZXRob2QgcmVxdWlyZXMgYW4gb2JqZWN0IHdpdGggYW55IG9mIHRoZSBmb2xsb3dpbmcga2V5cyBhbmQgYW5cbiAgICAgKiBhcnJheSBvZiBwYXRoczpcbiAgICAgKlxuICAgICAqIC0gYGpzYDogQW4gYXJyYXkgb2YgSmF2YVNjcmlwdCBVUkxzIHRvIGxvYWRcbiAgICAgKiAtIGBjc3NgOiBBbiBhcnJheSBvZiBDU1Mgc3R5bGVzaGVldCBVUkxzIHRvIGxvYWRcbiAgICAgKiAtIGBpbWdgOiBBbiBhcnJheSBvZiBpbWFnZSBVUkxzIHRvIHByZS1sb2FkXG4gICAgICpcbiAgICAgKiBCb3RoIGBqc2AgYW5kIGBjc3NgIGZpbGVzIHdpbGwgYmUgYXV0b21hdGljYWxseSBpbmplY3RlZCwgaG93ZXZlciBgaW1nYCBmaWxlcyB3aWxsIG5vdC5cbiAgICAgKlxuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYWxsIHJlcXVpcmVkIGFzc2V0cyBhcmUgbG9hZGVkLiBJZiBhblxuICAgICAqIGFzc2V0IGZhaWxzIHRvIGxvYWQsIHRoaXMgUHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkLlxuICAgICAqXG4gICAgICogRVNMaW50ICpSRUFMTFkqIGRvZXNuJ3QgbGlrZSB0aGlzIGNvZGUsIGJ1dCBpZ25vcmUgaXQuIEl0J3MgdGhlIG9ubHkgd2F5IGl0IHdvcmtzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IGFzc2V0c1xuICAgICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgICAqL1xuICAgIGFzeW5jIGxvYWQoYXNzZXRzKSB7XG4gICAgICAgIGlmIChhc3NldHMuanMgJiYgYXNzZXRzLmpzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2NyaXB0IG9mIGFzc2V0cy5qcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZFNjcmlwdChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGFzc2V0cy5jc3MgJiYgYXNzZXRzLmNzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHN0eWxlIG9mIGFzc2V0cy5jc3MpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmxvYWRTdHlsZShzdHlsZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXNzZXRzLmltZyAmJiBhc3NldHMuaW1nLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW1hZ2Ugb2YgYXNzZXRzLmltZykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMubG9hZEltYWdlKGltYWdlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbmplY3RzIGFuZCBsb2FkcyBhIEphdmFTY3JpcHQgVVJMIGludG8gdGhlIERPTS5cbiAgICAgKlxuICAgICAqIFRoZSBzY3JpcHQgd2lsbCBiZSBhcHBlbmRlZCBiZWZvcmUgdGhlIGNsb3NpbmcgYDwvYm9keT5gIHRhZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBzY3JpcHRcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBsb2FkU2NyaXB0KHNjcmlwdCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSBzY3JpcHQgVVJMXG4gICAgICAgICAgICBzY3JpcHQgPSB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldChzY3JpcHQpO1xuXG4gICAgICAgICAgICAvLyBDaGVjayB0aGF0IHNjcmlwdCBpcyBub3QgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmM9XCIke3NjcmlwdH1cIl1gKTtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgc2NyaXB0XG4gICAgICAgICAgICBjb25zdCBkb21TY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIGRvbVNjcmlwdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dC9qYXZhc2NyaXB0Jyk7XG4gICAgICAgICAgICBkb21TY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBzY3JpcHQpO1xuICAgICAgICAgICAgZG9tU2NyaXB0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdzY3JpcHQnLCBzY3JpcHQsIGRvbVNjcmlwdCk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb21TY3JpcHQuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmVycm9yJywgJ3NjcmlwdCcsIHNjcmlwdCwgZG9tU2NyaXB0KTtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGBVbmFibGUgdG8gbG9hZCBzY3JpcHQgZmlsZTogXCIke3NjcmlwdH1cImApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZG9tU2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0cyBhbmQgbG9hZHMgYSBDU1Mgc3R5bGVzaGVldCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBUaGUgc3R5bGVzaGVldCB3aWxsIGJlIGFwcGVuZGVkIGJlZm9yZSB0aGUgY2xvc2luZyBgPC9oZWFkPmAgdGFnLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHN0eWxlXG4gICAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAgICovXG4gICAgbG9hZFN0eWxlKHN0eWxlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAvLyBSZXNvbHZlIHN0eWxlIFVSTFxuICAgICAgICAgICAgc3R5bGUgPSB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldChzdHlsZSk7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIHRoYXQgc3R5bGVzaGVldCBpcyBub3QgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgIGNvbnN0IGxvYWRlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwic3R5bGVzaGVldFwiXVtocmVmPVwiJHtzdHlsZX1cIl1gKTtcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgc3R5bGVzaGVldFxuICAgICAgICAgICAgY29uc3QgZG9tQ3NzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgICAgICAgICAgZG9tQ3NzLnNldEF0dHJpYnV0ZSgncmVsJywgJ3N0eWxlc2hlZXQnKTtcbiAgICAgICAgICAgIGRvbUNzcy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBzdHlsZSk7XG4gICAgICAgICAgICBkb21Dc3MuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnYXNzZXRMb2FkZXIubG9hZGVkJywgJ3N0eWxlJywgc3R5bGUsIGRvbUNzcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkb21Dc3MuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmVycm9yJywgJ3N0eWxlJywgc3R5bGUsIGRvbUNzcyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihgVW5hYmxlIHRvIGxvYWQgc3R5bGVzaGVldCBmaWxlOiBcIiR7c3R5bGV9XCJgKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGRvbUNzcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByZS1sb2FkcyBhbiBpbWFnZS5cbiAgICAgKlxuICAgICAqIFRoZSBpbWFnZSB3aWxsIG5vdCBiZSBpbmplY3RlZCBpbnRvIHRoZSBET00uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gaW1hZ2VcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBsb2FkSW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIC8vIFJlc29sdmUgc2NyaXB0IFVSTFxuICAgICAgICAgICAgaW1hZ2UgPSB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldChpbWFnZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Fzc2V0TG9hZGVyLmxvYWRlZCcsICdpbWFnZScsIGltYWdlLCBpbWcpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdhc3NldExvYWRlci5lcnJvcicsICdpbWFnZScsIGltYWdlLCBpbWcpO1xuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoYFVuYWJsZSB0byBsb2FkIGltYWdlIGZpbGU6IFwiJHtpbWFnZX1cImApKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaW1nLnNyYyA9IGltYWdlO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEFsbG93cyBhdHRhY2hpbmcgYSBsb2FkaW5nIGNsYXNzIG9uIGVsZW1lbnRzIHRoYXQgYW4gQUpBWCByZXF1ZXN0IGlzIHRhcmdldGluZy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0YWNoTG9hZGluZyBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBkZXBlbmRlbmljZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWydyZXF1ZXN0J107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBsaXN0ZW5lcnMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGxpc3RlbnMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBhamF4U3RhcnQ6ICdhamF4U3RhcnQnLFxuICAgICAgICAgICAgYWpheERvbmU6ICdhamF4RG9uZScsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgYWpheFN0YXJ0KHByb21pc2UsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0LmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXF1ZXN0LmVsZW1lbnQudGFnTmFtZSA9PT0gJ0ZPUk0nKSB7XG4gICAgICAgICAgICBjb25zdCBsb2FkRWxlbWVudHMgPSByZXF1ZXN0LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYXR0YWNoLWxvYWRpbmddJyk7XG4gICAgICAgICAgICBpZiAobG9hZEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBsb2FkRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5nZXRMb2FkaW5nQ2xhc3MoZWxlbWVudCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmVxdWVzdC5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5nZXRMb2FkaW5nQ2xhc3MocmVxdWVzdC5lbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhamF4RG9uZShkYXRhLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmICghcmVxdWVzdC5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVxdWVzdC5lbGVtZW50LnRhZ05hbWUgPT09ICdGT1JNJykge1xuICAgICAgICAgICAgY29uc3QgbG9hZEVsZW1lbnRzID0gcmVxdWVzdC5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWF0dGFjaC1sb2FkaW5nXScpO1xuICAgICAgICAgICAgaWYgKGxvYWRFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbG9hZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKGVsZW1lbnQpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChyZXF1ZXN0LmVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlcXVlc3QuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuZ2V0TG9hZGluZ0NsYXNzKHJlcXVlc3QuZWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TG9hZGluZ0NsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIChlbGVtZW50LmRhdGFzZXQuYXR0YWNoTG9hZGluZyAhPT0gdW5kZWZpbmVkICYmIGVsZW1lbnQuZGF0YXNldC5hdHRhY2hMb2FkaW5nICE9PSAnJylcbiAgICAgICAgICAgID8gZWxlbWVudC5kYXRhc2V0LmF0dGFjaExvYWRpbmdcbiAgICAgICAgICAgIDogJ3duLWxvYWRpbmcnO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBEYXRhIGNvbmZpZ3VyYXRpb24gcHJvdmlkZXIuXG4gKlxuICogUHJvdmlkZXMgYSBtZWNoYW5pc20gZm9yIHBhc3NpbmcgY29uZmlndXJhdGlvbiBkYXRhIHRocm91Z2ggYW4gZWxlbWVudCdzIGRhdGEgYXR0cmlidXRlcy4gVGhpc1xuICogaXMgZ2VuZXJhbGx5IHVzZWQgZm9yIHdpZGdldHMgb3IgVUkgaW50ZXJhY3Rpb25zIHRvIGNvbmZpZ3VyZSB0aGVtLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMiBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhQ29uZmlnIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BsdWdpbkJhc2V9IGluc3RhbmNlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBsb2NhbENvbmZpZ1xuICAgICAqL1xuICAgIGNvbnN0cnVjdChpbnN0YW5jZSwgZWxlbWVudCwgbG9jYWxDb25maWcpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlIGluc3RhbmNlb2YgUGx1Z2luQmFzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgcHJvdmlkZSBhIFNub3dib2FyZCBwbHVnaW4gdG8gZW5hYmxlIGRhdGEgY29uZmlndXJhdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RhdGEgY29uZmlndXJhdGlvbiBjYW4gb25seSBiZSBleHRyYWN0ZWQgZnJvbSBIVE1MIGVsZW1lbnRzJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMubG9jYWxDb25maWcgPSBsb2NhbENvbmZpZyB8fCB7fTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbmZpZyA9IHt9O1xuICAgICAgICB0aGlzLmFjY2VwdGVkQ29uZmlncyA9IHt9O1xuICAgICAgICB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjb25maWcgZm9yIHRoaXMgaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgYGNvbmZpZ2AgcGFyYW1ldGVyIGlzIHVuc3BlY2lmaWVkLCByZXR1cm5zIHRoZSBlbnRpcmUgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjb25maWdcbiAgICAgKi9cbiAgICBnZXQoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VDb25maWc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZUNvbmZpZ1tjb25maWddICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29uZmlnW2NvbmZpZ107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGNvbmZpZyBmb3IgdGhpcyBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIFRoaXMgYWxsb3dzIHlvdSB0byBvdmVycmlkZSwgYXQgcnVudGltZSwgYW55IGNvbmZpZ3VyYXRpb24gdmFsdWUgYXMgbmVjZXNzYXJ5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbmZpZ1xuICAgICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gcGVyc2lzdFxuICAgICAqL1xuICAgIHNldChjb25maWcsIHZhbHVlLCBwZXJzaXN0KSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBwcm92aWRlIGEgY29uZmlndXJhdGlvbiBrZXkgdG8gc2V0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmluc3RhbmNlQ29uZmlnW2NvbmZpZ10gPSB2YWx1ZTtcblxuICAgICAgICBpZiAocGVyc2lzdCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRhdGFzZXRbY29uZmlnXSA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5sb2NhbENvbmZpZ1tjb25maWddID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGNvbmZpZ3VyYXRpb24gZnJvbSB0aGUgZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBhbGxvdyB5b3UgdG8gbWFrZSBjaGFuZ2VzIHRvIHRoZSBkYXRhIGNvbmZpZyBvbiBhIERPTSBsZXZlbCBhbmQgcmUtYXBwbHkgdGhlbVxuICAgICAqIHRvIHRoZSBjb25maWcgb24gdGhlIEphdmFTY3JpcHQgc2lkZS5cbiAgICAgKi9cbiAgICByZWZyZXNoKCkge1xuICAgICAgICB0aGlzLmFjY2VwdGVkQ29uZmlncyA9IHRoaXMuZ2V0QWNjZXB0ZWRDb25maWdzKCk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb25maWcgPSB0aGlzLnByb2Nlc3NDb25maWcoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIHRoZSBhdmFpbGFibGUgY29uZmlndXJhdGlvbnMgdGhhdCBjYW4gYmUgc2V0IHRocm91Z2ggdGhlIGRhdGEgY29uZmlnLlxuICAgICAqXG4gICAgICogSWYgYW4gaW5zdGFuY2UgaGFzIGFuIGBhY2NlcHRBbGxEYXRhQ29uZmlnc2AgcHJvcGVydHksIHNldCB0byBgdHJ1ZWAsIHRoZW4gYWxsIGRhdGFcbiAgICAgKiBhdHRyaWJ1dGVzIHdpbGwgYmUgYXZhaWxhYmxlIGFzIGNvbmZpZ3VyYXRpb24gdmFsdWVzLiBUaGlzIGNhbiBiZSBhIHNlY3VyaXR5IGNvbmNlcm4sIHNvXG4gICAgICogdHJlYWQgY2FyZWZ1bGx5LlxuICAgICAqXG4gICAgICogT3RoZXJ3aXNlLCBhdmFpbGFibGUgY29uZmlndXJhdGlvbnMgd2lsbCBiZSBkZXRlcm1pbmVkIGJ5IHRoZSBrZXlzIGF2YWlsYWJsZSBpbiBhbiBvYmplY3RcbiAgICAgKiByZXR1cm5lZCBieSBhIGBkZWZhdWx0cygpYCBtZXRob2QgaW4gdGhlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfGJvb2xlYW59XG4gICAgICovXG4gICAgZ2V0QWNjZXB0ZWRDb25maWdzKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlLmFjY2VwdEFsbERhdGFDb25maWdzICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICYmIHRoaXMuaW5zdGFuY2UuYWNjZXB0QWxsRGF0YUNvbmZpZ3MgPT09IHRydWVcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgIT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICYmIHR5cGVvZiB0aGlzLmluc3RhbmNlLmRlZmF1bHRzKCkgPT09ICdvYmplY3QnXG4gICAgICAgICkge1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBiZSBhbiBlbXB0eSBvYmplY3QgaWYgdGhlIGluc3RhbmNlIGVpdGhlciBkb2VzIG5vdCBoYXZlIGEgYGRlZmF1bHRzKClgIG1ldGhvZCwgb3JcbiAgICAgKiB0aGUgbWV0aG9kIGl0c2VsZiBkb2VzIG5vdCByZXR1cm4gYW4gb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge29iamVjdH1cbiAgICAgKi9cbiAgICBnZXREZWZhdWx0cygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cyAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAmJiB0eXBlb2YgdGhpcy5pbnN0YW5jZS5kZWZhdWx0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICAgICAgJiYgdHlwZW9mIHRoaXMuaW5zdGFuY2UuZGVmYXVsdHMoKSA9PT0gJ29iamVjdCdcbiAgICAgICAgKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5kZWZhdWx0cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFByb2Nlc3NlcyB0aGUgY29uZmlndXJhdGlvbi5cbiAgICAgKlxuICAgICAqIExvYWRzIHVwIHRoZSBkZWZhdWx0cywgdGhlbiBwb3B1bGF0ZXMgaXQgd2l0aCBhbnkgY29uZmlndXJhdGlvbiB2YWx1ZXMgcHJvdmlkZWQgYnkgdGhlIGRhdGFcbiAgICAgKiBhdHRyaWJ1dGVzLCBiYXNlZCBvbiB0aGUgcnVsZXMgb2YgdGhlIGFjY2VwdGVkIGNvbmZpZ3VyYXRpb25zLlxuICAgICAqXG4gICAgICogVGhpcyBjb25maWd1cmF0aW9uIG9iamVjdCBpcyB0aGVuIGNhY2hlZCBhbmQgYXZhaWxhYmxlIHRocm91Z2ggYGNvbmZpZy5nZXQoKWAgY2FsbHMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxuICAgICAqL1xuICAgIHByb2Nlc3NDb25maWcoKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHRoaXMuZ2V0RGVmYXVsdHMoKTtcblxuICAgICAgICBpZiAodGhpcy5hY2NlcHRlZENvbmZpZ3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uZmlnO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5lbGVtZW50LmRhdGFzZXQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmFjY2VwdGVkQ29uZmlncyA9PT0gdHJ1ZSB8fCB0aGlzLmFjY2VwdGVkQ29uZmlncy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnW2tleV0gPSB0aGlzLmNvZXJjZVZhbHVlKHRoaXMuZWxlbWVudC5kYXRhc2V0W2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5sb2NhbENvbmZpZykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWRDb25maWdzID09PSB0cnVlIHx8IHRoaXMuYWNjZXB0ZWRDb25maWdzLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgICAgICAgICAgICBjb25maWdba2V5XSA9IHRoaXMubG9jYWxDb25maWdba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG5cbiAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb2VyY2VzIGNvbmZpZ3VyYXRpb24gdmFsdWVzIGZvciBKYXZhU2NyaXB0LlxuICAgICAqXG4gICAgICogVGFrZXMgdGhlIHN0cmluZyB2YWx1ZSByZXR1cm5lZCBmcm9tIHRoZSBkYXRhIGF0dHJpYnV0ZSBhbmQgY29lcmNlcyBpdCBpbnRvIGEgbW9yZSBzdWl0YWJsZVxuICAgICAqIHR5cGUgZm9yIEphdmFTY3JpcHQgcHJvY2Vzc2luZy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Kn0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBjb2VyY2VWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBjb25zdCBzdHJpbmdWYWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG5cbiAgICAgICAgLy8gTnVsbCB2YWx1ZVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUgPT09ICdudWxsJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbmRlZmluZWQgdmFsdWVcbiAgICAgICAgaWYgKHN0cmluZ1ZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJhc2U2NCB2YWx1ZVxuICAgICAgICBpZiAoc3RyaW5nVmFsdWUuc3RhcnRzV2l0aCgnYmFzZTY0OicpKSB7XG4gICAgICAgICAgICBjb25zdCBiYXNlNjRzdHIgPSBzdHJpbmdWYWx1ZS5yZXBsYWNlKC9eYmFzZTY0Oi8sICcnKTtcbiAgICAgICAgICAgIGNvbnN0IGRlY29kZWQgPSBhdG9iKGJhc2U2NHN0cik7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2VyY2VWYWx1ZShkZWNvZGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJvb2xlYW4gdmFsdWVcbiAgICAgICAgaWYgKFsndHJ1ZScsICd5ZXMnXS5pbmNsdWRlcyhzdHJpbmdWYWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKFsnZmFsc2UnLCAnbm8nXS5pbmNsdWRlcyhzdHJpbmdWYWx1ZS50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTnVtZXJpYyB2YWx1ZVxuICAgICAgICBpZiAoL15bLStdP1swLTldKyhcXC5bMC05XSspPyQvLnRlc3Qoc3RyaW5nVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gTnVtYmVyKHN0cmluZ1ZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEpTT04gdmFsdWVcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNub3dib2FyZC5qc29uUGFyc2VyKCkucGFyc2Uoc3RyaW5nVmFsdWUpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gKHN0cmluZ1ZhbHVlID09PSAnJykgPyB0cnVlIDogc3RyaW5nVmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5cbi8qKlxuICogUHJvdmlkZXMgZmxhc2ggbWVzc2FnZXMgZm9yIHRoZSBDTVMuXG4gKlxuICogRmxhc2ggbWVzc2FnZXMgd2lsbCBwb3AgdXAgYXQgdGhlIHRvcCBjZW50ZXIgb2YgdGhlIHBhZ2UgYW5kIHdpbGwgcmVtYWluIGZvciA3IHNlY29uZHMgYnkgZGVmYXVsdC4gSG92ZXJpbmcgb3ZlclxuICogdGhlIG1lc3NhZ2Ugd2lsbCByZXNldCBhbmQgcGF1c2UgdGhlIHRpbWVyLiBDbGlja2luZyBvbiB0aGUgZmxhc2ggbWVzc2FnZSB3aWxsIGRpc21pc3MgaXQuXG4gKlxuICogQXJndW1lbnRzOlxuICogIC0gXCJtZXNzYWdlXCI6IFRoZSBjb250ZW50IG9mIHRoZSBmbGFzaCBtZXNzYWdlLiBIVE1MIGlzIGFjY2VwdGVkLlxuICogIC0gXCJ0eXBlXCI6IFRoZSB0eXBlIG9mIGZsYXNoIG1lc3NhZ2UuIFRoaXMgaXMgYXBwZW5kZWQgYXMgYSBjbGFzcyB0byB0aGUgZmxhc2ggbWVzc2FnZSBpdHNlbGYuXG4gKiAgLSBcImR1cmF0aW9uXCI6IEhvdyBsb25nIHRoZSBmbGFzaCBtZXNzYWdlIHdpbGwgc3RheSB2aXNpYmxlIGZvciwgaW4gc2Vjb25kcy4gRGVmYXVsdDogNyBzZWNvbmRzLlxuICpcbiAqIFVzYWdlOlxuICogICAgICBTbm93Ym9hcmQuZmxhc2goJ1RoaXMgaXMgYSBmbGFzaCBtZXNzYWdlJywgJ2luZm8nLCA4KTtcbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmxhc2ggZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb25cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3QobWVzc2FnZSwgdHlwZSwgZHVyYXRpb24pIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZSB8fCAnZGVmYXVsdCc7XG4gICAgICAgIHRoaXMuZHVyYXRpb24gPSBOdW1iZXIoZHVyYXRpb24gfHwgNyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPCAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZsYXNoIGR1cmF0aW9uIG11c3QgYmUgYSBwb3NpdGl2ZSBudW1iZXIsIG9yIHplcm8nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuZmxhc2hUaW1lciA9IG51bGw7XG4gICAgICAgIHRoaXMuY3JlYXRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBkZXBlbmRlbmNpZXMuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzKCkge1xuICAgICAgICByZXR1cm4gWyd0cmFuc2l0aW9uJ107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVzdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBlbnN1cmUgdGhlIGZsYXNoIG1lc3NhZ2UgaXMgcmVtb3ZlZCBhbmQgdGltZW91dCBpcyBjbGVhcmVkIGlmIHRoZSBtb2R1bGUgaXMgcmVtb3ZlZC5cbiAgICAgKi9cbiAgICBkZXN0cnVjdCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mbGFzaFRpbWVyKSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoVGltZXIucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mbGFzaCkge1xuICAgICAgICAgICAgdGhpcy5mbGFzaC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMuZmxhc2ggPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN1cGVyLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdmbGFzaC5jcmVhdGUnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLmZsYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIHRoaXMuZmxhc2guaW5uZXJIVE1MID0gdGhpcy5tZXNzYWdlO1xuICAgICAgICB0aGlzLmZsYXNoLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoLW1lc3NhZ2UnLCB0aGlzLnR5cGUpO1xuICAgICAgICB0aGlzLmZsYXNoLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1jb250cm9sJyk7XG4gICAgICAgIHRoaXMuZmxhc2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlbW92ZSgpKTtcbiAgICAgICAgdGhpcy5mbGFzaC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB0aGlzLnN0b3BUaW1lcigpKTtcbiAgICAgICAgdGhpcy5mbGFzaC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHRoaXMuc3RhcnRUaW1lcigpKTtcblxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmxhc2hUaW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaFRpbWVyLmNsYXNzTGlzdC5hZGQoJ2ZsYXNoLXRpbWVyJyk7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLmFwcGVuZENoaWxkKHRoaXMuZmxhc2hUaW1lcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLmNsYXNzTGlzdC5hZGQoJ25vLXRpbWVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgdG8gYm9keVxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZmxhc2gpO1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLnRyYW5zaXRpb24odGhpcy5mbGFzaCwgJ3Nob3cnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZmxhc2ggbWVzc2FnZS5cbiAgICAgKi9cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCdmbGFzaC5yZW1vdmUnLCB0aGlzKTtcblxuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuXG4gICAgICAgIHRoaXMuc25vd2JvYXJkLnRyYW5zaXRpb24odGhpcy5mbGFzaCwgJ2hpZGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZsYXNoLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5mbGFzaCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmRlc3RydWN0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgZmxhc2ggbWVzc2FnZXMgYXZhaWxhYmxlIG9uIHRoZSBwYWdlLlxuICAgICAqL1xuICAgIGNsZWFyKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdib2R5ID4gZGl2LmZsYXNoLW1lc3NhZ2UnKS5mb3JFYWNoKChlbGVtZW50KSA9PiBlbGVtZW50LnJlbW92ZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdGFydHMgdGhlIHRpbWVyIGZvciB0aGlzIGZsYXNoIG1lc3NhZ2UuXG4gICAgICovXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudGltZXJUcmFucyA9IHRoaXMuc25vd2JvYXJkLnRyYW5zaXRpb24odGhpcy5mbGFzaFRpbWVyLCAndGltZW91dCcsIG51bGwsIGAke3RoaXMuZHVyYXRpb259LjBzYCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudGltZXIgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB0aGlzLnJlbW92ZSgpLCB0aGlzLmR1cmF0aW9uICogMTAwMCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB0aW1lciBmb3IgdGhpcyBmbGFzaCBtZXNzYWdlLlxuICAgICAqL1xuICAgIHN0b3BUaW1lcigpIHtcbiAgICAgICAgaWYgKHRoaXMudGltZXJUcmFucykge1xuICAgICAgICAgICAgdGhpcy50aW1lclRyYW5zLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBEZWZpbmVzIGEgZGVmYXVsdCBsaXN0ZW5lciBmb3IgZmxhc2ggZXZlbnRzLlxuICpcbiAqIENvbm5lY3RzIHRoZSBGbGFzaCBwbHVnaW4gdG8gdmFyaW91cyBldmVudHMgdGhhdCB1c2UgZmxhc2ggbWVzc2FnZXMuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZsYXNoTGlzdGVuZXIgZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgZGVwZW5kZW5pY2VzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ1tdfVxuICAgICAqL1xuICAgIGRlcGVuZGVuY2llcygpIHtcbiAgICAgICAgcmV0dXJuIFsnZmxhc2gnXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICAgICAgYWpheEVycm9yTWVzc2FnZTogJ2FqYXhFcnJvck1lc3NhZ2UnLFxuICAgICAgICAgICAgYWpheEZsYXNoTWVzc2FnZXM6ICdhamF4Rmxhc2hNZXNzYWdlcycsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRG8gZmxhc2ggbWVzc2FnZXMgZm9yIFBIUCBmbGFzaCByZXNwb25zZXMuXG4gICAgICovXG4gICAgcmVhZHkoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNvbnRyb2w9XCJmbGFzaC1tZXNzYWdlXCJdJykuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZmxhc2goXG4gICAgICAgICAgICAgICAgZWxlbWVudC5pbm5lckhUTUwsXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LmZsYXNoVHlwZSxcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuZmxhc2hEdXJhdGlvbixcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgZmxhc2ggbWVzc2FnZSBmb3IgQUpBWCBlcnJvcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZVxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGFqYXhFcnJvck1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5mbGFzaChtZXNzYWdlLCAnZXJyb3InKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3dzIGZsYXNoIG1lc3NhZ2VzIHJldHVybmVkIGRpcmVjdGx5IGZyb20gQUpBWCBmdW5jdGlvbmFsaXR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG1lc3NhZ2VzXG4gICAgICovXG4gICAgYWpheEZsYXNoTWVzc2FnZXMobWVzc2FnZXMpIHtcbiAgICAgICAgT2JqZWN0LmVudHJpZXMobWVzc2FnZXMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbY3NzQ2xhc3MsIG1lc3NhZ2VdID0gZW50cnk7XG4gICAgICAgICAgICB0aGlzLnNub3dib2FyZC5mbGFzaChtZXNzYWdlLCBjc3NDbGFzcyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBBZGRzIEFKQVgtZHJpdmVuIGZvcm0gdmFsaWRhdGlvbiB0byBTbm93Ym9hcmQgcmVxdWVzdHMuXG4gKlxuICogRG9jdW1lbnRhdGlvbiBmb3IgdGhpcyBmZWF0dXJlIGNhbiBiZSBmb3VuZCBoZXJlOlxuICogaHR0cHM6Ly93aW50ZXJjbXMuY29tL2RvY3Mvc25vd2JvYXJkL2V4dHJhcyNhamF4LXZhbGlkYXRpb25cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjIgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRpb24gZXh0ZW5kcyBTaW5nbGV0b24ge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdCgpIHtcbiAgICAgICAgdGhpcy5lcnJvckJhZ3MgPSBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICAgICAgYWpheFN0YXJ0OiAnY2xlYXJWYWxpZGF0aW9uJyxcbiAgICAgICAgICAgIGFqYXhWYWxpZGF0aW9uRXJyb3JzOiAnZG9WYWxpZGF0aW9uJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWFkeSBldmVudCBoYW5kbGVyLlxuICAgICAqL1xuICAgIHJlYWR5KCkge1xuICAgICAgICB0aGlzLmNvbGxlY3RFcnJvckJhZ3MoZG9jdW1lbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB2YWxpZGF0aW9uIGVycm9ycyBmcm9tIGFuIEFKQVggcmVzcG9uc2UgYW5kIHBhc3NlcyB0aGVtIHRocm91Z2ggdG8gdGhlIGVycm9yIGJhZ3MuXG4gICAgICpcbiAgICAgKiBUaGlzIGhhbmRsZXIgcmV0dXJucyBmYWxzZSB0byBjYW5jZWwgYW55IGZ1cnRoZXIgdmFsaWRhdGlvbiBoYW5kbGluZywgYW5kIHByZXZlbnRzIHRoZSBmbGFzaFxuICAgICAqIG1lc3NhZ2UgdGhhdCBpcyBkaXNwbGF5ZWQgYnkgZGVmYXVsdCBmb3IgZmllbGQgZXJyb3JzIGluIEFKQVggcmVxdWVzdHMgZnJvbSBzaG93aW5nLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtIVE1MRm9ybUVsZW1lbnR9IGZvcm1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW52YWxpZEZpZWxkc1xuICAgICAqIEBwYXJhbSB7UmVxdWVzdH0gcmVxdWVzdFxuICAgICAqIEByZXR1cm5zIHtCb29sZWFufVxuICAgICAqL1xuICAgIGRvVmFsaWRhdGlvbihmb3JtLCBpbnZhbGlkRmllbGRzLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0LmVsZW1lbnQgJiYgcmVxdWVzdC5lbGVtZW50LmRhdGFzZXQucmVxdWVzdFZhbGlkYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlcnJvckJhZ3MgPSB0aGlzLmVycm9yQmFncy5maWx0ZXIoKGVycm9yQmFnKSA9PiBlcnJvckJhZy5mb3JtID09PSBmb3JtKTtcbiAgICAgICAgZXJyb3JCYWdzLmZvckVhY2goKGVycm9yQmFnKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvckJhZyhlcnJvckJhZywgaW52YWxpZEZpZWxkcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYW55IHZhbGlkYXRpb24gZXJyb3JzIGluIHRoZSBnaXZlbiBmb3JtLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQcm9taXNlfSBwcm9taXNlXG4gICAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0XG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgY2xlYXJWYWxpZGF0aW9uKHByb21pc2UsIHJlcXVlc3QpIHtcbiAgICAgICAgaWYgKHJlcXVlc3QuZWxlbWVudCAmJiByZXF1ZXN0LmVsZW1lbnQuZGF0YXNldC5yZXF1ZXN0VmFsaWRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmVxdWVzdC5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlcnJvckJhZ3MgPSB0aGlzLmVycm9yQmFncy5maWx0ZXIoKGVycm9yQmFnKSA9PiBlcnJvckJhZy5mb3JtID09PSByZXF1ZXN0LmZvcm0pO1xuICAgICAgICBlcnJvckJhZ3MuZm9yRWFjaCgoZXJyb3JCYWcpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUVycm9yQmFnKGVycm9yQmFnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ29sbGVjdHMgZXJyb3IgYmFncyAoZWxlbWVudHMgd2l0aCBcImRhdGEtdmFsaWRhdGUtZXJyb3JcIiBhdHRyaWJ1dGUpIGFuZCBsaW5rcyB0aGVtIHRvIGFcbiAgICAgKiBwbGFjZWhvbGRlciBhbmQgZm9ybS5cbiAgICAgKlxuICAgICAqIFRoZSBlcnJvciBiYWdzIHdpbGwgYmUgaW5pdGlhbGx5IGhpZGRlbiwgYW5kIHdpbGwgb25seSBzaG93IHdoZW4gdmFsaWRhdGlvbiBlcnJvcnMgb2NjdXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSByb290Tm9kZVxuICAgICAqL1xuICAgIGNvbGxlY3RFcnJvckJhZ3Mocm9vdE5vZGUpIHtcbiAgICAgICAgcm9vdE5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdmFsaWRhdGUtZXJyb3JdLCBbZGF0YS12YWxpZGF0ZS1mb3JdJykuZm9yRWFjaCgoZXJyb3JCYWcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBlcnJvckJhZy5jbG9zZXN0KCdmb3JtW2RhdGEtcmVxdWVzdC12YWxpZGF0ZV0nKTtcblxuICAgICAgICAgICAgLy8gSWYgdGhpcyBlcnJvciBiYWcgZG9lcyBub3QgcmVzaWRlIHdpdGhpbiBhIHZhbGlkYXRpbmcgZm9ybSwgcmVtb3ZlIGl0XG4gICAgICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgICAgICBlcnJvckJhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVycm9yQmFnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZpbmQgbWVzc2FnZSBsaXN0IG5vZGUsIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgbGV0IG1lc3NhZ2VMaXN0RWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICBpZiAoZXJyb3JCYWcubWF0Y2hlcygnW2RhdGEtdmFsaWRhdGUtZXJyb3JdJykpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdEVsZW1lbnQgPSBlcnJvckJhZy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1tZXNzYWdlXScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBwbGFjZWhvbGRlciBub2RlXG4gICAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJycpO1xuXG4gICAgICAgICAgICAvLyBSZWdpc3RlciBlcnJvciBiYWcgYW5kIHJlcGxhY2Ugd2l0aCBwbGFjZWhvbGRlclxuICAgICAgICAgICAgY29uc3QgZXJyb3JCYWdEYXRhID0ge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGVycm9yQmFnLFxuICAgICAgICAgICAgICAgIGZvcm0sXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVGb3I6IChlcnJvckJhZy5kYXRhc2V0LnZhbGlkYXRlRm9yKVxuICAgICAgICAgICAgICAgICAgICA/IGVycm9yQmFnLmRhdGFzZXQudmFsaWRhdGVGb3Iuc3BsaXQoL1xccyosXFxzKi8pXG4gICAgICAgICAgICAgICAgICAgIDogJyonLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VMaXN0RWxlbWVudDogKG1lc3NhZ2VMaXN0RWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgPyBtZXNzYWdlTGlzdEVsZW1lbnQuY2xvbmVOb2RlKHRydWUpXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICBtZXNzYWdlTGlzdEFuY2hvcjogbnVsbCxcbiAgICAgICAgICAgICAgICBjdXN0b21NZXNzYWdlOiAoZXJyb3JCYWcuZGF0YXNldC52YWxpZGF0ZUZvcilcbiAgICAgICAgICAgICAgICAgICAgPyAoZXJyb3JCYWcudGV4dENvbnRlbnQgIT09ICcnIHx8IGVycm9yQmFnLmNoaWxkTm9kZXMubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIElmIGFuIG1lc3NhZ2UgbGlzdCBlbGVtZW50IGV4aXN0cywgY3JlYXRlIGFub3RoZXIgcGxhY2Vob2xkZXIgdG8gYWN0IGFzIGFuIGFuY2hvciBwb2ludFxuICAgICAgICAgICAgaWYgKG1lc3NhZ2VMaXN0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VMaXN0QW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnJyk7XG4gICAgICAgICAgICAgICAgbWVzc2FnZUxpc3RFbGVtZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG1lc3NhZ2VMaXN0QW5jaG9yLCBtZXNzYWdlTGlzdEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGVycm9yQmFnRGF0YS5tZXNzYWdlTGlzdEFuY2hvciA9IG1lc3NhZ2VMaXN0QW5jaG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlcnJvckJhZy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChwbGFjZWhvbGRlciwgZXJyb3JCYWcpO1xuXG4gICAgICAgICAgICB0aGlzLmVycm9yQmFncy5wdXNoKGVycm9yQmFnRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGVzIGFuIGVycm9yIGJhZywgcmVwbGFjaW5nIHRoZSBlcnJvciBtZXNzYWdlcyB3aXRoIGEgcGxhY2Vob2xkZXIgbm9kZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvckJhZ1xuICAgICAqL1xuICAgIGhpZGVFcnJvckJhZyhlcnJvckJhZykge1xuICAgICAgICBpZiAoZXJyb3JCYWcuZWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgZXJyb3JCYWcuZWxlbWVudC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlcnJvckJhZy5wbGFjZWhvbGRlciwgZXJyb3JCYWcuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhbiBlcnJvciBiYWcgd2l0aCB0aGUgZ2l2ZW4gaW52YWxpZCBmaWVsZHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gZXJyb3JCYWdcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gaW52YWxpZEZpZWxkc1xuICAgICAqL1xuICAgIHNob3dFcnJvckJhZyhlcnJvckJhZywgaW52YWxpZEZpZWxkcykge1xuICAgICAgICBpZiAoIXRoaXMuZXJyb3JCYWdWYWxpZGF0ZXNGaWVsZChlcnJvckJhZywgaW52YWxpZEZpZWxkcykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZXJyb3JCYWcuZWxlbWVudC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgICAgZXJyb3JCYWcucGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZXJyb3JCYWcuZWxlbWVudCwgZXJyb3JCYWcucGxhY2Vob2xkZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yQmFnLnZhbGlkYXRlRm9yICE9PSAnKicpIHtcbiAgICAgICAgICAgIGlmICghZXJyb3JCYWcuY3VzdG9tTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpcnN0RmllbGQgPSBPYmplY3Qua2V5cyhpbnZhbGlkRmllbGRzKVxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKChmaWVsZCkgPT4gZXJyb3JCYWcudmFsaWRhdGVGb3IuaW5jbHVkZXMoZmllbGQpKVxuICAgICAgICAgICAgICAgICAgICAuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBbZXJyb3JCYWcuZWxlbWVudC5pbm5lckhUTUxdID0gaW52YWxpZEZpZWxkc1tmaXJzdEZpZWxkXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChlcnJvckJhZy5tZXNzYWdlTGlzdEVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBwcmV2aW91cyBlcnJvciBtZXNzYWdlc1xuICAgICAgICAgICAgZXJyb3JCYWcuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS12YWxpZGF0aW9uLW1lc3NhZ2VdJykuZm9yRWFjaCgobWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtZXNzYWdlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhpbnZhbGlkRmllbGRzKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IFssIGVycm9yc10gPSBlbnRyeTtcblxuICAgICAgICAgICAgICAgIGVycm9ycy5mb3JFYWNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGVycm9yQmFnLm1lc3NhZ2VMaXN0RWxlbWVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VFbGVtZW50LmRhdGFzZXQudmFsaWRhdGlvbk1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZUVsZW1lbnQuaW5uZXJIVE1MID0gZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQmFnLm1lc3NhZ2VMaXN0QW5jaG9yLmFmdGVyKG1lc3NhZ2VFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgW2Vycm9yQmFnLmVsZW1lbnQuaW5uZXJIVE1MXSA9IGludmFsaWRGaWVsZHNbT2JqZWN0LmtleXMoaW52YWxpZEZpZWxkcykuc2hpZnQoKV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgZ2l2ZW4gZXJyb3IgYmFnIGFwcGxpZXMgZm9yIHRoZSBnaXZlbiBpbnZhbGlkIGZpZWxkcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBlcnJvckJhZ1xuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBpbnZhbGlkRmllbGRzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICovXG4gICAgZXJyb3JCYWdWYWxpZGF0ZXNGaWVsZChlcnJvckJhZywgaW52YWxpZEZpZWxkcykge1xuICAgICAgICBpZiAoZXJyb3JCYWcudmFsaWRhdGVGb3IgPT09ICcqJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMoaW52YWxpZEZpZWxkcylcbiAgICAgICAgICAgIC5maWx0ZXIoKGZpZWxkKSA9PiBlcnJvckJhZy52YWxpZGF0ZUZvci5pbmNsdWRlcyhmaWVsZCkpXG4gICAgICAgICAgICAubGVuZ3RoID4gMDtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIERpc3BsYXlzIGEgc3RyaXBlIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgdGhhdCBpbmRpY2F0ZXMgbG9hZGluZy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjEgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaXBlTG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGRlcGVuZGVuaWNlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBkZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIHJldHVybiBbJ3JlcXVlc3QnXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICAgICAgYWpheFN0YXJ0OiAnYWpheFN0YXJ0JyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZWFkeSgpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyID0gMDtcblxuICAgICAgICB0aGlzLmNyZWF0ZVN0cmlwZSgpO1xuICAgIH1cblxuICAgIGFqYXhTdGFydChwcm9taXNlLCByZXF1ZXN0KSB7XG4gICAgICAgIGlmIChyZXF1ZXN0Lm9wdGlvbnMuc3RyaXBlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlU3RyaXBlKCkge1xuICAgICAgICB0aGlzLmluZGljYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLnN0cmlwZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLnN0cmlwZUxvYWRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuXG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZS1sb2FkaW5nLWluZGljYXRvcicsICdsb2FkZWQnKTtcbiAgICAgICAgdGhpcy5zdHJpcGUuY2xhc3NMaXN0LmFkZCgnc3RyaXBlJyk7XG4gICAgICAgIHRoaXMuc3RyaXBlTG9hZGVkLmNsYXNzTGlzdC5hZGQoJ3N0cmlwZS1sb2FkZWQnKTtcblxuICAgICAgICB0aGlzLmluZGljYXRvci5hcHBlbmRDaGlsZCh0aGlzLnN0cmlwZSk7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmFwcGVuZENoaWxkKHRoaXMuc3RyaXBlTG9hZGVkKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuaW5kaWNhdG9yKTtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICB0aGlzLmNvdW50ZXIgKz0gMTtcblxuICAgICAgICBjb25zdCBuZXdTdHJpcGUgPSB0aGlzLnN0cmlwZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgIHRoaXMuaW5kaWNhdG9yLmFwcGVuZENoaWxkKG5ld1N0cmlwZSk7XG4gICAgICAgIHRoaXMuc3RyaXBlLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLnN0cmlwZSA9IG5ld1N0cmlwZTtcblxuICAgICAgICBpZiAodGhpcy5jb3VudGVyID4gMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pbmRpY2F0b3IuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGVkJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnd24tbG9hZGluZycpO1xuICAgIH1cblxuICAgIGhpZGUoZm9yY2UpIHtcbiAgICAgICAgdGhpcy5jb3VudGVyIC09IDE7XG5cbiAgICAgICAgaWYgKGZvcmNlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuY291bnRlciA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmluZGljYXRvci5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnd24tbG9hZGluZycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBFbWJlZHMgdGhlIFwiZXh0cmFzXCIgc3R5bGVzaGVldCBpbnRvIHRoZSBwYWdlLCBpZiBpdCBpcyBub3QgbG9hZGVkIHRocm91Z2ggdGhlIHRoZW1lLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHlsZXNoZWV0TG9hZGVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGxpc3RlbmVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgbGlzdGVucygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWR5OiAncmVhZHknLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHJlYWR5KCkge1xuICAgICAgICBsZXQgc3R5bGVzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHN0eWxlc2hlZXQgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJzdHlsZXNoZWV0XCJdJykuZm9yRWFjaCgoY3NzKSA9PiB7XG4gICAgICAgICAgICBpZiAoY3NzLmhyZWYuZW5kc1dpdGgoJy9tb2R1bGVzL3N5c3RlbS9hc3NldHMvY3NzL3Nub3dib2FyZC5leHRyYXMuY3NzJykpIHtcbiAgICAgICAgICAgICAgICBzdHlsZXNMb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIXN0eWxlc0xvYWRlZCkge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgICAgIHN0eWxlc2hlZXQuc2V0QXR0cmlidXRlKCdyZWwnLCAnc3R5bGVzaGVldCcpO1xuICAgICAgICAgICAgc3R5bGVzaGVldC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB0aGlzLnNub3dib2FyZC51cmwoKS5hc3NldCgnL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9jc3Mvc25vd2JvYXJkLmV4dHJhcy5jc3MnKSk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlc2hlZXQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFBsdWdpbkJhc2UgZnJvbSAnLi4vYWJzdHJhY3RzL1BsdWdpbkJhc2UnO1xuXG4vKipcbiAqIFByb3ZpZGVzIHRyYW5zaXRpb24gc3VwcG9ydCBmb3IgZWxlbWVudHMuXG4gKlxuICogVHJhbnNpdGlvbiBhbGxvd3MgQ1NTIHRyYW5zaXRpb25zIHRvIGJlIGNvbnRyb2xsZWQgYW5kIGNhbGxiYWNrcyB0byBiZSBydW4gb25jZSBjb21wbGV0ZWQuIEl0IHdvcmtzIHNpbWlsYXIgdG8gVnVlXG4gKiB0cmFuc2l0aW9ucyB3aXRoIDMgc3RhZ2VzIG9mIHRyYW5zaXRpb24sIGFuZCBjbGFzc2VzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IHdpdGggdGhlIHRyYW5zaXRpb24gbmFtZSBzdWZmaXhlZCB3aXRoXG4gKiB0aGUgc3RhZ2Ugb2YgdHJhbnNpdGlvbjpcbiAqXG4gKiAgLSBgaW5gOiBBIGNsYXNzIGFzc2lnbmVkIHRvIHRoZSBlbGVtZW50IGZvciB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIHRyYW5zaXRpb24sIHJlbW92ZWQgYWZ0ZXJ3YXJkcy4gVGhpcyBzaG91bGQgYmVcbiAqICAgICAgdXNlZCB0byBkZWZpbmUgdGhlIGluaXRpYWwgc3RhdGUgb2YgdGhlIHRyYW5zaXRpb24uXG4gKiAgLSBgYWN0aXZlYDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBmb3IgdGhlIGR1cmF0aW9uIG9mIHRoZSB0cmFuc2l0aW9uLiBUaGlzIHNob3VsZCBiZSB1c2VkIHRvIGRlZmluZSB0aGVcbiAqICAgICAgdHJhbnNpdGlvbiBpdHNlbGYuXG4gKiAgLSBgb3V0YDogQSBjbGFzcyBhc3NpZ25lZCB0byB0aGUgZWxlbWVudCBhZnRlciB0aGUgZmlyc3QgZnJhbWUgb2YgdGhlIHRyYW5zaXRpb24gYW5kIGtlcHQgdG8gdGhlIGVuZCBvZiB0aGVcbiAqICAgICAgdHJhbnNpdGlvbi4gVGhpcyBzaG91bGQgZGVmaW5lIHRoZSBlbmQgc3RhdGUgb2YgdGhlIHRyYW5zaXRpb24uXG4gKlxuICogVXNhZ2U6XG4gKiAgICAgIFNub3dib2FyZC50cmFuc2l0aW9uKGRvY3VtZW50LmVsZW1lbnQsICd0cmFuc2l0aW9uJywgKCkgPT4ge1xuICogICAgICAgICAgY29uc29sZS5sb2coJ1JlbW92ZSBlbGVtZW50IGFmdGVyIDcgc2Vjb25kcycpO1xuICogICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAqICAgICAgfSwgJzdzJyk7XG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRyYW5zaXRpb24gZXh0ZW5kcyBQbHVnaW5CYXNlIHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3Rvci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gdHJhbnNpdGlvblxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0cmFuc2l0aW9uIFRoZSBuYW1lIG9mIHRoZSB0cmFuc2l0aW9uLCB0aGlzIHByZWZpeGVzIHRoZSBzdGFnZXMgb2YgdHJhbnNpdGlvbi5cbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBBbiBvcHRpb25hbCBjYWxsYmFjayB0byBjYWxsIHdoZW4gdGhlIHRyYW5zaXRpb24gZW5kcy5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gZHVyYXRpb24gQW4gb3B0aW9uYWwgb3ZlcnJpZGUgb24gdGhlIHRyYW5zaXRpb24gZHVyYXRpb24uIE11c3QgYmUgc3BlY2lmaWVkIGFzICdzJyAoc2Vjcykgb3IgJ21zJyAobXNlY3MpLlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdHJhaWxUbyBJZiB0cnVlLCB0aGUgXCJvdXRcIiBjbGFzcyB3aWxsIHJlbWFpbiBhZnRlciB0aGUgZW5kIG9mIHRoZSB0cmFuc2l0aW9uLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdChlbGVtZW50LCB0cmFuc2l0aW9uLCBjYWxsYmFjaywgZHVyYXRpb24sIHRyYWlsVG8pIHtcbiAgICAgICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQSBIVE1MRWxlbWVudCBtdXN0IGJlIHByb3ZpZGVkIGZvciB0cmFuc2l0aW9uaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgICAgICBpZiAodHlwZW9mIHRyYW5zaXRpb24gIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zaXRpb24gbmFtZSBtdXN0IGJlIHNwZWNpZmllZCBhcyBhIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNpdGlvbiA9IHRyYW5zaXRpb247XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsYmFjayBtdXN0IGJlIGEgdmFsaWQgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cbiAgICAgICAgaWYgKGR1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gdGhpcy5wYXJzZUR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmFpbFRvID0gKHRyYWlsVG8gPT09IHRydWUpO1xuXG4gICAgICAgIHRoaXMuZG9UcmFuc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFwcyBldmVudCBjbGFzc2VzIHRvIHRoZSBnaXZlbiB0cmFuc2l0aW9uIHN0YXRlLlxuICAgICAqXG4gICAgICogQHBhcmFtICB7Li4uYW55fSBhcmdzXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIGV2ZW50Q2xhc3NlcyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50Q2xhc3NlcyA9IHtcbiAgICAgICAgICAgIGluOiBgJHt0aGlzLnRyYW5zaXRpb259LWluYCxcbiAgICAgICAgICAgIGFjdGl2ZTogYCR7dGhpcy50cmFuc2l0aW9ufS1hY3RpdmVgLFxuICAgICAgICAgICAgb3V0OiBgJHt0aGlzLnRyYW5zaXRpb259LW91dGAsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhldmVudENsYXNzZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmV0dXJuQ2xhc3NlcyA9IFtdO1xuICAgICAgICBPYmplY3QuZW50cmllcyhldmVudENsYXNzZXMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBlbnRyeTtcblxuICAgICAgICAgICAgaWYgKGFyZ3MuaW5kZXhPZihrZXkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybkNsYXNzZXMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXR1cm5DbGFzc2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVzIHRoZSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZG9UcmFuc2l0aW9uKCkge1xuICAgICAgICAvLyBBZGQgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZXNldENsYXNzZXMoKTtcblxuICAgICAgICAvLyBTdGFydCB0cmFuc2l0aW9uIC0gc2hvdyBcImluXCIgYW5kIFwiYWN0aXZlXCIgY2xhc3Nlc1xuICAgICAgICB0aGlzLmV2ZW50Q2xhc3NlcygnaW4nLCAnYWN0aXZlJykuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgLy8gRW5zdXJlIGEgdHJhbnNpdGlvbiBleGlzdHNcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpWyd0cmFuc2l0aW9uLWR1cmF0aW9uJ10gIT09ICcwcycpIHtcbiAgICAgICAgICAgICAgICAvLyBMaXN0ZW4gZm9yIHRoZSB0cmFuc2l0aW9uIHRvIGVuZFxuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4gdGhpcy5vblRyYW5zaXRpb25FbmQoKSwge1xuICAgICAgICAgICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmV2ZW50Q2xhc3NlcygnaW4nKVswXSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuZXZlbnRDbGFzc2VzKCdvdXQnKVswXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRDbGFzc2VzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDYWxsYmFjayBmdW5jdGlvbiB3aGVuIHRoZSB0cmFuc2l0aW9uIGVuZHMuXG4gICAgICpcbiAgICAgKiBXaGVuIGEgdHJhbnNpdGlvbiBlbmRzLCB0aGUgaW5zdGFuY2Ugb2YgdGhlIHRyYW5zaXRpb24gaXMgYXV0b21hdGljYWxseSBkZXN0cnVjdGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgb25UcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICB0aGlzLmV2ZW50Q2xhc3NlcygnYWN0aXZlJywgKCF0aGlzLnRyYWlsVG8pID8gJ291dCcgOiAnJykuZm9yRWFjaCgoZXZlbnRDbGFzcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoZXZlbnRDbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrLmFwcGx5KHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgZHVyYXRpb24gb3ZlcnJpZGVcbiAgICAgICAgaWYgKHRoaXMuZHVyYXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbmNlbHMgYSB0cmFuc2l0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgY2FuY2VsKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHRoaXMub25UcmFuc2l0aW9uRW5kLCB7XG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlc2V0Q2xhc3NlcygpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBkdXJhdGlvbiBvdmVycmlkZVxuICAgICAgICBpZiAodGhpcy5kdXJhdGlvbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIGRlc3RydWN0b3JcbiAgICAgICAgdGhpcy5kZXN0cnVjdCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgY2xhc3NlcywgcmVtb3ZpbmcgYW55IHRyYW5zaXRpb24gY2xhc3Nlcy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIHJlc2V0Q2xhc3NlcygpIHtcbiAgICAgICAgdGhpcy5ldmVudENsYXNzZXMoKS5mb3JFYWNoKChldmVudENsYXNzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShldmVudENsYXNzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgZ2l2ZW4gZHVyYXRpb24gYW5kIGNvbnZlcnRzIGl0IHRvIGEgXCJtc1wiIHZhbHVlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGR1cmF0aW9uXG4gICAgICogQHJldHVybnMge1N0cmluZ31cbiAgICAgKi9cbiAgICBwYXJzZUR1cmF0aW9uKGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IC9eKFswLTldKyhcXC5bMC05XSspPykobT9zKT8kLy5leGVjKGR1cmF0aW9uKTtcbiAgICAgICAgY29uc3QgYW1vdW50ID0gTnVtYmVyKHBhcnNlZFsxXSk7XG4gICAgICAgIGNvbnN0IHVuaXQgPSAocGFyc2VkWzNdID09PSAncycpXG4gICAgICAgICAgICA/ICdzZWMnXG4gICAgICAgICAgICA6ICdtc2VjJztcblxuICAgICAgICByZXR1cm4gKHVuaXQgPT09ICdzZWMnKVxuICAgICAgICAgICAgPyBgJHthbW91bnQgKiAxMDAwfW1zYFxuICAgICAgICAgICAgOiBgJHtNYXRoLmZsb29yKGFtb3VudCl9bXNgO1xuICAgIH1cbn1cbiIsImltcG9ydCBQbHVnaW5CYXNlIGZyb20gJy4uL2Fic3RyYWN0cy9QbHVnaW5CYXNlJztcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBUcmlnZ2VyRW50aXR5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gdHJpZ2dlciBUaGUgc2VsZWN0b3IgZm9yIHRoZSB0cmlnZ2VyIHRhcmdldCBlbGVtZW50KHMpLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNvbmRpdGlvbiBUaGUgY29uZGl0aW9uIHRoYXQgbXVzdCBiZSBtZXQgZm9yIHRoZSB0cmlnZ2VyIHRvIGZpcmUuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gYWN0aW9uIFRoZSBhY3Rpb24gdG8gcGVyZm9ybSB3aGVuIHRoZSB0cmlnZ2VyIGZpcmVzLlxuICogQHByb3BlcnR5IHtzdHJpbmd8dW5kZWZpbmVkfSBwYXJlbnQgVGhlIHBhcmVudCBlbGVtZW50IHdpdGggd2hpY2ggdG8gbGltaXQgdGhlIHRyaWdnZXIgc2NvcGUuXG4gKiBAcHJvcGVydHkge3N0cmluZ3xudW1iZXJ9IHByaW9yaXR5IFRoZSBwcmlvcml0eSBvZiB0aGUgdHJpZ2dlciBldmVudC5cbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnRbXX0gZWxlbWVudHMgVGhlIHRhcmdldCBlbGVtZW50cyB0aGF0IHRoaXMgdHJpZ2dlciBhcHBsaWVzIHRvLlxuICogQHByb3BlcnR5IHtGdW5jdGlvbltdfSBjb25kaXRpb25DYWxsYmFja3MgVGhlIGNvbmRpdGlvbiBjYWxsYmFja3MgZm9yIHRoaXMgdHJpZ2dlci5cbiAqIEBwcm9wZXJ0eSB7TWFwPEhUTUxFbGVtZW50LCBTZXQ8c3RyaW5nPj59IGVsZW1lbnRFdmVudHMgVGhlIGV2ZW50cyByZWdpc3RlcmVkIG9uIHRoZSB0YXJnZXQgZWxlbWVudHMuXG4gKi9cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gVHJpZ2dlckVsZW1lbnRcbiAqIEBwcm9wZXJ0eSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgVGhlIHRhcmdldCBlbGVtZW50LlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGV2ZW50TmFtZSBUaGUgdHJpZ2dlciBldmVudCBuYW1lLlxuICogQHByb3BlcnR5IHtpbnR9IHByaW9yaXR5IFRoZSB0cmlnZ2VyIGV2ZW50IHByaW9yaXR5LlxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gZXZlbnQgVGhlIHRyaWdnZXIgZXZlbnQgZnVuY3Rpb24uXG4gKi9cblxuLyoqXG4gKiBUcmlnZ2VyIGhhbmRsZXIgZm9yIEhUTUwgZWxlbWVudHMuXG4gKlxuICogVGhpcyBpcyBhIHJlLWltYWdpbmluZyBvZiB0aGUgSW5wdXQuVHJpZ2dlciBmdW5jdGlvbmFsaXR5IGluIHRoZSBvcmlnaW5hbCBXaW50ZXIgQ01TIGZyYW1ld29yayxcbiAqIGluaXRpYWxpc2VkIHRocm91Z2ggdGhlIGBkYXRhLXRyaWdnZXJgIGF0dHJpYnV0ZXMuXG4gKlxuICogSW4gYWRkaXRpb24gdG8gcmVtYWluaW5nIGJhY2t3YXJkcy1jb21wYXRpYmxlIHdpdGggdGhlIG9yaWdpbmFsIElucHV0LlRyaWdnZXIgZnVuY3Rpb25hbGl0eSwgdGhpc1xuICogaGFuZGxlciBhZGRzIGFkZGl0aW9uYWwgY29uZGl0aW9ucyBhbmQgY29uZmlndXJhdGlvbiBmb3IgbW9yZSBmbGV4aWJsZSB0cmlnZ2VyIHVzYWdlLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly93aW50ZXJjbXMuY29tL2RvY3MvdjEuMi91aS9zY3JpcHQvaW5wdXQtdHJpZ2dlclxuICpcbiAqIEBjb3B5cmlnaHQgMjAyNCBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlnZ2VyIGV4dGVuZHMgUGx1Z2luQmFzZSB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgY29uc3RydWN0KGVsZW1lbnQpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBlbGVtZW50IHRoaXMgaW5zdGFuY2UgaXMgYXR0YWNoZWQgdG8uXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7TWFwPHN0cmluZywgVHJpZ2dlckVudGl0eT59IFRoZSB0cmlnZ2VycyBmb3IgdGhpcyBlbGVtZW50LlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmlnZ2VycyA9IG5ldyBNYXAoKTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHR5cGUge01hcDxFbGVtZW50LCBTZXQ8VHJpZ2dlckVsZW1lbnQ+Pn0gQSBtYXAgb2YgZWxlbWVudHMgdGhhdCB0cmlnZ2VyIGV2ZW50cy5cbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuZXZlbnRzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSB7TWFwPEVsZW1lbnQsIE1hcDxzdHJpbmcsIEZ1bmN0aW9uPj59IEEgbWFwIG9mIGVsZW1lbnRzIGFuZCB0aGVpciBldmVudCBjb25uZWN0b3JzLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5jb25uZWN0b3JzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHRoaXMucGFyc2VUcmlnZ2VycygpO1xuXG4gICAgICAgIGlmICh0aGlzLnRyaWdnZXJzLnNpemUgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0RXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVRyaWdnZXJFdmVudHMoKTtcbiAgICAgICAgICAgIHRoaXMucnVuRXZlbnRzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc25vd2JvYXJkLmdsb2JhbEV2ZW50KCd0cmlnZ2Vycy5yZWFkeScsIHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXN0cnVjdG9yLlxuICAgICAqL1xuICAgIGRlc3RydWN0KCkge1xuICAgICAgICB0aGlzLnJlc2V0RXZlbnRzKCk7XG4gICAgICAgIHN1cGVyLmRlc3RydWN0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBlbGVtZW50J3MgZGF0YSBhdHRyaWJ1dGVzIGFuZCBkZXRlcm1pbmVzIGFwcGxpY2FibGUgdHJpZ2dlcnMuXG4gICAgICpcbiAgICAgKiBUcmlnZ2VyIGRhdGEgYXR0cmlidXRlcyBtdXN0IGJlIGluIHRoZSBmb3JtYXQgYGRhdGEtdHJpZ2dlci1bbmFtZV0tW3BhcmFtZXRlcl1gIGZvciBtdWx0aXBsZVxuICAgICAqIHRyaWdnZXJzLCBvciBgZGF0YS10cmlnZ2VyLVtwYXJhbWV0ZXJdYCBmb3Igc2luZ2xlIHRyaWdnZXJzLlxuICAgICAqXG4gICAgICogU3VwcG9ydGVkIHBhcmFtZXRlcnMgYXJlOlxuICAgICAqICAtIGBjb25kaXRpb25gIG9yIGB3aGVyZWA6IFRoZSBjb25kaXRpb24gdGhhdCBtdXN0IGJlIG1ldCBmb3IgdGhlIHRyaWdnZXIgdG8gZmlyZS5cbiAgICAgKiAgLSBgYWN0aW9uYCBvciBgZG9gOiBUaGUgYWN0aW9uIHRvIHBlcmZvcm0gd2hlbiB0aGUgdHJpZ2dlciBmaXJlcy5cbiAgICAgKiAgLSBgY2xvc2VzdC1wYXJlbnRgIG9yIGBwYXJlbnRgOiBUaGUgcGFyZW50IGVsZW1lbnQgd2l0aCB3aGljaCB0byBsaW1pdCB0aGUgdHJpZ2dlciBzY29wZS5cbiAgICAgKiAgLSBgcHJpb3JpdHlgOiBUaGUgcHJpb3JpdHkgaW4gd2hpY2ggdG8gY29uc2lkZXIgdGhlIHRyaWdnZXIuXG4gICAgICpcbiAgICAgKiBJbnRlcm5hbGx5LCB0aGUgdHJpZ2dlciBtYXAgdXNlcyB0aGUgYHRyaWdnZXJgIHBhcmFtZXRlciB0byBzdG9yZSB0aGUgdHJpZ2dlciBzZWxlY3Rvci5cbiAgICAgKi9cbiAgICBwYXJzZVRyaWdnZXJzKCkge1xuICAgICAgICBjb25zdCB7IGRhdGFzZXQgfSA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5jbGVhcigpO1xuXG4gICAgICAgIE9iamVjdC5rZXlzKGRhdGFzZXQpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKC8tW0EtWl0vLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5hYmxlIHRvIGNvbnZlcnQgY2FtZWxDYXNlIHRvIGRhc2gtc3R5bGUgZm9yIGRhdGEgYXR0cmlidXRlOiAke2tleX1gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGFzaFN0eWxlID0ga2V5LnJlcGxhY2UoLyhbQS1aXSkvZywgKG1hdGNoKSA9PiBgLSR7bWF0Y2gudG9Mb3dlckNhc2UoKX1gKTtcblxuICAgICAgICAgICAgaWYgKGRhc2hTdHlsZSAhPT0gJ3RyaWdnZXInICYmICFkYXNoU3R5bGUuc3RhcnRzV2l0aCgndHJpZ2dlci0nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgdHJpZ2dlclBhcnRzID0gLyhbYS16MC05XFwtLjpfXSs/KSg/Oig/Oi0pKGNsb3Nlc3QtcGFyZW50fGNvbmRpdGlvbnx3aGVufGFjdGlvbnxwYXJlbnR8cHJpb3JpdHl8ZG8pKT8kL2kuZXhlYyhcbiAgICAgICAgICAgICAgICBkYXNoU3R5bGUucmVwbGFjZSgndHJpZ2dlci0nLCAnJykudG9Mb3dlckNhc2UoKSxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCB0cmlnZ2VyTmFtZSA9IG51bGw7XG4gICAgICAgICAgICBsZXQgdHJpZ2dlclR5cGUgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgWyd0cmlnZ2VyJywgJ2NvbmRpdGlvbicsICdhY3Rpb24nLCAncGFyZW50JywgJ3doZW4nLCAnY2xvc2VzdCddLmluZGV4T2YodHJpZ2dlclBhcnRzWzFdKSAhPT0gLTFcbiAgICAgICAgICAgICAgICAmJiAodHJpZ2dlclBhcnRzWzFdICE9PSAnY2xvc2VzdCcgfHwgKHRyaWdnZXJQYXJ0c1sxXSA9PT0gJ2Nsb3Nlc3QnICYmIHRyaWdnZXJQYXJ0c1syXSA9PT0gJ3BhcmVudCcpKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydCBvcmlnaW5hbCB0cmlnZ2VyIGZvcm1hdFxuICAgICAgICAgICAgICAgIHRyaWdnZXJOYW1lID0gJ19fb3JpZ2luYWwnO1xuICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlID0gKHRyaWdnZXJQYXJ0c1sxXSA9PT0gJ2Nsb3Nlc3QnKSA/ICdwYXJlbnQnIDogdHJpZ2dlclBhcnRzWzFdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICB0cmlnZ2VyUGFydHNbMl0gPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIHx8IFsnY2xvc2VzdC1wYXJlbnQnLCAnY29uZGl0aW9uJywgJ3doZW4nLCAnYWN0aW9uJywgJ3BhcmVudCcsICdwcmlvcml0eScsICdkbyddLmluZGV4T2YodHJpZ2dlclBhcnRzWzJdKSAhPT0gLTFcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIFBhcnNlIG11bHRpLXRyaWdnZXIgZm9ybWF0XG4gICAgICAgICAgICAgICAgWywgdHJpZ2dlck5hbWVdID0gdHJpZ2dlclBhcnRzO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodHJpZ2dlclBhcnRzWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Nsb3Nlc3QtcGFyZW50JzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncGFyZW50JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlID0gJ3BhcmVudCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29uZGl0aW9uJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnd2hlbic6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZSA9ICdjb25kaXRpb24nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FjdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJUeXBlID0gJ2FjdGlvbic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncHJpb3JpdHknOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlclR5cGUgPSAncHJpb3JpdHknO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyVHlwZSA9ICd0cmlnZ2VyJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF0aGlzLnRyaWdnZXJzLmhhcyh0cmlnZ2VyTmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJzLnNldCh0cmlnZ2VyTmFtZSwgbmV3IE1hcCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcnMuZ2V0KHRyaWdnZXJOYW1lKS5zZXQodHJpZ2dlclR5cGUsIGRhdGFzZXRba2V5XSk7XG5cbiAgICAgICAgICAgIC8vIFJlbW92ZSB0cmlnZ2VyIGRhdGEgYXR0cmlidXRlIGFmdGVyIHBhcnNpbmdcbiAgICAgICAgICAgIGRlbGV0ZSBkYXRhc2V0W2tleV07XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFZhbGlkYXRlIHRyaWdnZXJzLCBhbmQgcmVtb3ZlIHRob3NlIHRoYXQgZG8gbm90IGhhdmUgYXQgbGVhc3QgYSB0cmlnZ2VyIHNlbGVjdG9yLCBhXG4gICAgICAgIC8vIGNvbmRpdGlvbiBhbmQgYW4gYWN0aW9uLCBvciBhcmUgdXNpbmcgaW52YWxpZCBjb25kaXRpb25zIG9yIGFjdGlvbnNcbiAgICAgICAgdGhpcy50cmlnZ2Vycy5mb3JFYWNoKCh0cmlnZ2VyLCBuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuZ2V0U2VsZWN0YWJsZUVsZW1lbnRzKHRyaWdnZXIpO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgIXRyaWdnZXIuaGFzKCd0cmlnZ2VyJylcbiAgICAgICAgICAgICAgICB8fCAhdHJpZ2dlci5oYXMoJ2NvbmRpdGlvbicpXG4gICAgICAgICAgICAgICAgfHwgIXRyaWdnZXIuaGFzKCdhY3Rpb24nKVxuICAgICAgICAgICAgICAgIHx8IGVsZW1lbnRzLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgIHx8ICF0aGlzLmhhc1ZhbGlkQ29uZGl0aW9ucyh0cmlnZ2VyKVxuICAgICAgICAgICAgICAgIHx8ICF0aGlzLmhhc1ZhbGlkQWN0aW9ucyh0cmlnZ2VyKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2Vycy5kZWxldGUobmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRyaWdnZXIuc2V0KCdlbGVtZW50cycsIGVsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICBpZiAoIXRyaWdnZXIuaGFzKCdwcmlvcml0eScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXIuc2V0KCdwcmlvcml0eScsIDEwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgYSBjb21tYW5kIGdpdmVuIGFzIGVpdGhlciBhIGNvbmRpdGlvbiBvciBhbiBhY3Rpb24uXG4gICAgICpcbiAgICAgKiBDb21tYW5kcyBhcmUgZm9ybWF0dGVkIGFzOiBuYW1lOnBhcmFtZXRlcjEscGFyYW1ldGVyMixwYXJhbWV0ZXIzLCBhbHRob3VnaCB3ZSBhbHNvIHN1cHBvcnRcbiAgICAgKiB0aGUgb2xkIGZvcm1hdCBvZiB2YWx1ZVtwYXJhbWV0ZXIxLHBhcmFtZXRlcjIscGFyYW1ldGVyM10gZm9yIHRoZSBgdmFsdWVgIGNvbW1hbmQgb25seS5cbiAgICAgKlxuICAgICAqIElmIGEgcGFyYW1ldGVyIHJlcXVpcmVzIGEgY29tbWEgd2l0aGluLCB0aGUgcGFyYW1ldGVyIHNob3VsZCBiZSB3cmFwcGVkIGluIHF1b3Rlcy5cbiAgICAgKlxuICAgICAqIE11bHRpcGxlIGNvbW1hbmRzIGNhbiBiZSBzZXBhcmF0ZWQgYnkgYSBwaXBlIGNoYXJhY3RlciBgfGAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29tbWFuZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhbGxvd011bHRpcGxlXG4gICAgICogQHJldHVybnMge3tuYW1lOiBzdHJpbmcsIHBhcmFtZXRlcnM6IHN0cmluZ1tdfVtdfVxuICAgICAqL1xuICAgIHBhcnNlQ29tbWFuZChjb21tYW5kLCBhbGxvd011bHRpcGxlID0gdHJ1ZSkge1xuICAgICAgICAvLyBTdXBwb3J0IG9sZC1mb3JtYXQgdmFsdWUgY29tbWFuZCAodmFsdWVbZm9vLGJhcl0pXG4gICAgICAgIGlmIChjb21tYW5kLnN0YXJ0c1dpdGgoJ3ZhbHVlJykgJiYgY29tbWFuZC5pbmNsdWRlcygnWycpKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IGNvbW1hbmQubWF0Y2goL1teW1xcXV0rKD89XSkvZyk7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcblxuICAgICAgICAgICAgLy8gU3BsaXQgdmFsdWVzIHdpdGggY29tbWFzXG4gICAgICAgICAgICBtYXRjaC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUuaW5jbHVkZXMoJywnKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWx1ZS5yZXBsYWNlKC9eWydcIl18WydcIl0kL2csICcnKS50cmltKCkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BsaXRWYWx1ZXMgPSB2YWx1ZS5yZXBsYWNlKC8oJy4qPyg/PCFcXFxcKScpfChcIi4qPyg/PCFcXFxcKVwiKS9nLCAocXVvdGVkKSA9PiBxdW90ZWQucmVwbGFjZSgvLC9nLCAnfHx8JykpXG4gICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnLCcpXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHNwbGl0VmFsdWUpID0+IHNwbGl0VmFsdWUucmVwbGFjZSgvXFx8XFx8XFx8L2csICcsJykucmVwbGFjZSgvXlsnXCJdfFsnXCJdJC9nLCAnJykudHJpbSgpKTtcblxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKC4uLnNwbGl0VmFsdWVzKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICAgICAgICBuYW1lOiAndmFsdWUnLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlcnM6IHZhbHVlcyxcbiAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIG11bHRpcGxlIGNvbW1hbmRzXG4gICAgICAgIGlmIChjb21tYW5kLmluY2x1ZGVzKCd8JykgJiYgYWxsb3dNdWx0aXBsZSkge1xuICAgICAgICAgICAgY29uc3Qgc3BsaXRDb21tYW5kcyA9IGNvbW1hbmQucmVwbGFjZSgvKCcuKj8oPzwhXFxcXCknKXwoXCIuKj8oPzwhXFxcXClcIikvZywgKHF1b3RlZCkgPT4gcXVvdGVkLnJlcGxhY2UoL1xcfC9nLCAnfHx8JykpXG4gICAgICAgICAgICAgICAgLnNwbGl0KCd8JylcbiAgICAgICAgICAgICAgICAubWFwKChzcGxpdFZhbHVlKSA9PiBzcGxpdFZhbHVlLnJlcGxhY2UoL1xcfFxcfFxcfC9nLCAnfCcpKTtcblxuICAgICAgICAgICAgY29uc3QgY29tbWFuZHMgPSBbXTtcbiAgICAgICAgICAgIHNwbGl0Q29tbWFuZHMuZm9yRWFjaCgoc3BsaXRDb21tYW5kKSA9PiB7XG4gICAgICAgICAgICAgICAgY29tbWFuZHMucHVzaCguLi50aGlzLnBhcnNlQ29tbWFuZChzcGxpdENvbW1hbmQsIGZhbHNlKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmRzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjb21tYW5kLmluY2x1ZGVzKCc6JykpIHtcbiAgICAgICAgICAgIHJldHVybiBbe1xuICAgICAgICAgICAgICAgIG5hbWU6IGNvbW1hbmQsXG4gICAgICAgICAgICAgICAgcGFyYW1ldGVyczogW10sXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IFtuYW1lLCBwYXJhbWV0ZXJzXSA9IGNvbW1hbmQuc3BsaXQoJzonLCAyKTtcblxuICAgICAgICBpZiAoIXBhcmFtZXRlcnMuaW5jbHVkZXMoJywnKSkge1xuICAgICAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJzOiBbcGFyYW1ldGVyc10sXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNwbGl0VmFsdWVzID0gcGFyYW1ldGVycy5yZXBsYWNlKC8oJy4qPyg/PCFcXFxcKScpfChcIi4qPyg/PCFcXFxcKVwiKS9nLCAocXVvdGVkKSA9PiBxdW90ZWQucmVwbGFjZSgvLC9nLCAnfHx8JykpXG4gICAgICAgICAgICAuc3BsaXQoJywnKVxuICAgICAgICAgICAgLm1hcCgoc3BsaXRWYWx1ZSkgPT4gc3BsaXRWYWx1ZS5yZXBsYWNlKC9cXHxcXHxcXHwvZywgJywnKS5yZXBsYWNlKC9eWydcIl18WydcIl0kL2csICcnKS5yZXBsYWNlKC9cXFxcKFsnXCJdKS8sICckMScpLnRyaW0oKSk7XG5cbiAgICAgICAgcmV0dXJuIFt7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgcGFyYW1ldGVyczogc3BsaXRWYWx1ZXMsXG4gICAgICAgIH1dO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENoZWNrcyBpZiBhbnkgZWxlbWVudHMgYXJlIGFjY2Vzc2libGUgYnkgdGhlIHByb3ZpZGVkIHRyaWdnZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge01hcDxUcmlnZ2VyRW50aXR5Pn0gdHJpZ2dlclxuICAgICAqIEByZXR1cm5zIHtIVE1MRWxlbWVudFtdfVxuICAgICAqL1xuICAgIGdldFNlbGVjdGFibGVFbGVtZW50cyh0cmlnZ2VyKSB7XG4gICAgICAgIGlmICh0cmlnZ2VyLmhhcygncGFyZW50JykpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LmNsb3Nlc3QodHJpZ2dlci5nZXQoJ3BhcmVudCcpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5jbG9zZXN0KHRyaWdnZXIuZ2V0KCdwYXJlbnQnKSkucXVlcnlTZWxlY3RvckFsbCh0cmlnZ2VyLmdldCgndHJpZ2dlcicpKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRyaWdnZXIuZ2V0KCd0cmlnZ2VyJykpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBwcm92aWRlZCB0cmlnZ2VyIGNvbmRpdGlvbihzKSBhcmUgdmFsaWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1RyaWdnZXJFbnRpdHl9IHRyaWdnZXJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBoYXNWYWxpZENvbmRpdGlvbnModHJpZ2dlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJzZUNvbW1hbmQodHJpZ2dlci5nZXQoJ2NvbmRpdGlvbicpKS5ldmVyeSgoY29uZGl0aW9uKSA9PiBbXG4gICAgICAgICAgICAnY2hlY2tlZCcsXG4gICAgICAgICAgICAndW5jaGVja2VkJyxcbiAgICAgICAgICAgICdlbXB0eScsXG4gICAgICAgICAgICAndmFsdWUnLFxuICAgICAgICAgICAgJ29uZW9mJyxcbiAgICAgICAgICAgICdhbGxvZicsXG4gICAgICAgICAgICAnZm9jdXMnLFxuICAgICAgICAgICAgJ2F0dHInLFxuICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgXS5pbmNsdWRlcyhjb25kaXRpb24ubmFtZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgcHJvdmlkZWQgdHJpZ2dlciBhY3Rpb24ocykgYXJlIHZhbGlkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaGFzVmFsaWRBY3Rpb25zKHRyaWdnZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyc2VDb21tYW5kKHRyaWdnZXIuZ2V0KCdhY3Rpb24nKSkuZXZlcnkoKGFjdGlvbikgPT4gW1xuICAgICAgICAgICAgJ3Nob3cnLFxuICAgICAgICAgICAgJ2hpZGUnLFxuICAgICAgICAgICAgJ2VuYWJsZScsXG4gICAgICAgICAgICAnZGlzYWJsZScsXG4gICAgICAgICAgICAnZW1wdHknLFxuICAgICAgICAgICAgJ3ZhbHVlJyxcbiAgICAgICAgICAgICd2YWx1ZU9mJyxcbiAgICAgICAgICAgICdjaGVjaycsXG4gICAgICAgICAgICAndW5jaGVjaycsXG4gICAgICAgICAgICAnY2xhc3MnLFxuICAgICAgICAgICAgJ2NsYXNzT2YnLFxuICAgICAgICAgICAgJ2F0dHInLFxuICAgICAgICAgICAgJ2F0dHJPZicsXG4gICAgICAgICAgICAnc3R5bGUnLFxuICAgICAgICAgICAgJ3N0eWxlT2YnLFxuICAgICAgICBdLmluY2x1ZGVzKGFjdGlvbi5uYW1lLnRvTG93ZXJDYXNlKCkpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgdHJpZ2dlciBldmVudHMgb24gdHJpZ2dlciBhbmQgdGFyZ2V0IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIGNyZWF0ZVRyaWdnZXJFdmVudHMoKSB7XG4gICAgICAgIHRoaXMudHJpZ2dlcnMuZm9yRWFjaCgodHJpZ2dlcikgPT4ge1xuICAgICAgICAgICAgLy8gQ29sbGVjdCBjb25kaXRpb25zIGFuZCBjaGVjayB0aGVtIGFzIGEgZ3JvdXAuXG4gICAgICAgICAgICB0cmlnZ2VyLnNldCgnY29uZGl0aW9uQ2FsbGJhY2tzJywgW10pO1xuICAgICAgICAgICAgdHJpZ2dlci5zZXQoJ2VsZW1lbnRFdmVudHMnLCBuZXcgTWFwKCkpO1xuXG4gICAgICAgICAgICB0aGlzLnBhcnNlQ29tbWFuZCh0cmlnZ2VyLmdldCgnY29uZGl0aW9uJykpLmZvckVhY2goKGNvbmRpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoY29uZGl0aW9uLm5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd2YWx1ZSc6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ29uZW9mJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIuZ2V0KCdjb25kaXRpb25DYWxsYmFja3MnKS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVmFsdWVDb25kaXRpb24odHJpZ2dlciwgZmFsc2UsIC4uLmNvbmRpdGlvbi5wYXJhbWV0ZXJzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYWxsb2YnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlci5nZXQoJ2NvbmRpdGlvbkNhbGxiYWNrcycpLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVWYWx1ZUNvbmRpdGlvbih0cmlnZ2VyLCB0cnVlLCAuLi5jb25kaXRpb24ucGFyYW1ldGVycyksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2VtcHR5JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIuZ2V0KCdjb25kaXRpb25DYWxsYmFja3MnKS5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRW1wdHlDb25kaXRpb24odHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrZWQnOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICd1bmNoZWNrZWQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlci5nZXQoJ2NvbmRpdGlvbkNhbGxiYWNrcycpLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVDaGVja2VkQ29uZGl0aW9uKHRyaWdnZXIsIChjb25kaXRpb24ubmFtZSA9PT0gJ2NoZWNrZWQnKSwgLi4uY29uZGl0aW9uLnBhcmFtZXRlcnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmb2N1cyc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyLmdldCgnY29uZGl0aW9uQ2FsbGJhY2tzJykucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUZvY3VzZWRDb25kaXRpb24odHJpZ2dlciksXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudExpc3RlbmVycygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXZlbnQgdG8gYW4gZWxlbWVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgcmVnaXN0ZXJzIHRoZSBldmVudCBpbiB0aGUgYGVsZW1lbnRFdmVudHNgIG1hcCBmb3IgbGF0ZXIgdXNhZ2UgYW5kIHJlbW92YWwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqL1xuICAgIGFkZEV2ZW50KGVsZW1lbnQsIHRyaWdnZXIsIGV2ZW50TmFtZSkge1xuICAgICAgICBpZiAoIXRyaWdnZXIuZ2V0KCdlbGVtZW50RXZlbnRzJykuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0cmlnZ2VyLmdldCgnZWxlbWVudEV2ZW50cycpLnNldChlbGVtZW50LCBuZXcgU2V0KCkpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdHJpZ2dlci5nZXQoJ2VsZW1lbnRFdmVudHMnKS5nZXQoZWxlbWVudCkuYWRkKGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgIHRyaWdnZXIuZ2V0KCdlbGVtZW50RXZlbnRzJykuZ2V0KGVsZW1lbnQpLmFkZChldmVudE5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVnaXN0ZXJzIERPTSBldmVudCBsaXN0ZW5lcnMgZm9yIHRhcmdldGVkIGVsZW1lbnRzIG9mIGFsbCB0cmlnZ2Vycy5cbiAgICAgKlxuICAgICAqIEFkZHMgYSBjb25uZWN0b3IgdG8gdGhlIGVsZW1lbnQgZm9yIHRoZSBldmVudHMsIHNvIHRoYXQgd2UgbWF5IGVuYWJsZSBwcmlvcml0aXNhdGlvbiBhbmRcbiAgICAgKiBjb250cm9sIG92ZXIgdGhlIGZpcmluZyBvZiB0aGUgZXZlbnRzLCBhbmQgdGhlbiByZWdpc3RlcnMgRE9NIGV2ZW50IGxpc3RlbmVycyBmb3IgdGhlXG4gICAgICogZWxlbWVudHMuXG4gICAgICovXG4gICAgcmVnaXN0ZXJFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgY29ubmVjdG9ycyA9IG5ldyBTZXQoKTtcblxuICAgICAgICB0aGlzLnRyaWdnZXJzLmZvckVhY2goKHRyaWdnZXIpID0+IHtcbiAgICAgICAgICAgIHRyaWdnZXIuZ2V0KCdlbGVtZW50RXZlbnRzJykuZm9yRWFjaCgoZXZlbnRzLCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmV2ZW50cy5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuc2V0KGVsZW1lbnQsIG5ldyBTZXQoKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbm5lY3RvcnMuaGFzKHsgZWxlbWVudCwgZXZlbnROYW1lIH0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0b3JzLmFkZCh7IGVsZW1lbnQsIGV2ZW50TmFtZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiBOdW1iZXIodHJpZ2dlci5nZXQoJ3ByaW9yaXR5JykpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVBY3Rpb25zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyLmdldCgnY29uZGl0aW9uQ2FsbGJhY2tzJykuZXZlcnkoKGNvbmRpdGlvbikgPT4gY29uZGl0aW9uKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRzLmdldChlbGVtZW50KS5hZGQoZXZlbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbm5lY3RvcnMuZm9yRWFjaCgoeyBlbGVtZW50LCBldmVudE5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbm5lY3RvcnMuaGFzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0b3JzLnNldChlbGVtZW50LCBuZXcgTWFwKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29ubmVjdG9ycy5nZXQoZWxlbWVudCkuaGFzKGV2ZW50TmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3RvcnMuZ2V0KGVsZW1lbnQpLnNldChldmVudE5hbWUsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRzID0gW107XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudHMuZ2V0KGVsZW1lbnQpLmZvckVhY2goKGVsZW1lbnRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRFdmVudC5ldmVudE5hbWUgPT09IGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdXNoKGVsZW1lbnRFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGEucHJpb3JpdHkgLSBiLnByaW9yaXR5KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goKGVsZW1lbnRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRFdmVudC5ldmVudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLmNvbm5lY3RvcnMuZ2V0KGVsZW1lbnQpLmdldChldmVudE5hbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRyaWdnZXIgdGhhdCBmaXJlcyB3aGVuIHRoZSB2YWx1ZSBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQocykgbWF0Y2hlcyBvbmUgb2YgdGhlXG4gICAgICogcHJvdmlkZWQgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICogQHBhcmFtICB7Li4uc3RyaW5nfSB2YWx1ZXNcbiAgICAgKi9cbiAgICBjcmVhdGVWYWx1ZUNvbmRpdGlvbih0cmlnZ2VyLCBhbGwsIC4uLnZhbHVlcykge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRFbGVtZW50cyA9IG5ldyBTZXQoKTtcblxuICAgICAgICB0cmlnZ2VyLmdldCgnZWxlbWVudHMnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9ZmlsZV0sIGlucHV0W3R5cGU9aW1hZ2VdLCBpbnB1dFt0eXBlPXJlc2V0XSwgaW5wdXRbdHlwZT1zdWJtaXRdJykpIHtcbiAgICAgICAgICAgICAgICAvLyBCdXR0b25zIGFuZCBmaWxlIGlucHV0cyBhcmUgdW5zdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudChlbGVtZW50LCB0cmlnZ2VyLCAnY2xpY2snKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hZGRFdmVudChlbGVtZW50LCB0cmlnZ2VyLCAnaW5wdXQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRWYWx1ZXMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPWNoZWNrYm94XSwgaW5wdXRbdHlwZT1yYWRpb10nKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVzLmFkZChlbGVtZW50LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudFZhbHVlcy5hZGQoZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGFsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuZXZlcnkoKHZhbHVlKSA9PiBlbGVtZW50VmFsdWVzLmhhcyh2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWVzLnNvbWUoKHZhbHVlKSA9PiBlbGVtZW50VmFsdWVzLmhhcyh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB0cmlnZ2VyIHRoYXQgZmlyZXMgd2hlbiB0aGVyZSBpcyBubyB2YWx1ZSB3aXRoaW4gdGhlIHRhcmdldCBlbGVtZW50KHMpLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICovXG4gICAgY3JlYXRlRW1wdHlDb25kaXRpb24odHJpZ2dlcikge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRFbGVtZW50cyA9IG5ldyBTZXQoKTtcblxuICAgICAgICB0cmlnZ2VyLmdldCgnZWxlbWVudHMnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5tYXRjaGVzKCdpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9aW1hZ2VdLCBpbnB1dFt0eXBlPXJlc2V0XSwgaW5wdXRbdHlwZT1zdWJtaXRdJykpIHtcbiAgICAgICAgICAgICAgICAvLyBCdXR0b25zIGFuZCBmaWxlIGlucHV0cyBhcmUgdW5zdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRFdmVudChlbGVtZW50LCB0cmlnZ2VyLCAnY2xpY2snKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQoZWxlbWVudCwgdHJpZ2dlciwgJ2lucHV0Jyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50VmFsdWVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgICAgICBzdXBwb3J0ZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcygnaW5wdXRbdHlwZT1jaGVja2JveF0sIGlucHV0W3R5cGU9cmFkaW9dJykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFZhbHVlcy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFZhbHVlcy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50VmFsdWVzLnNpemUgPT09IDA7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHRyaWdnZXIgdGhhdCBmaXJlcyB3aGVuIGEgdGFyZ2V0IGVsZW1lbnQocykgaXMgY2hlY2tlZC91bmNoZWNrZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1RyaWdnZXJFbnRpdHl9IHRyaWdnZXJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNoZWNrZWQgSWYgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIGNoZWNrZWQgb3IgdW5jaGVja2VkLlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcnx1bmRlZmluZWR9IGF0TGVhc3QgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGVsZW1lbnRzIHRoYXQgbXVzdCBiZSBjaGVja2VkLlxuICAgICAqICBEZWZhdWx0cyB0byAxIGlmIHVuZGVmaW5lZC4gSWYgc3BlY2lmaWVkIGFzIGBhbGxgLCBhbGwgZWxlbWVudHMgbXVzdCBiZSBjaGVja2VkLlxuICAgICAqL1xuICAgIGNyZWF0ZUNoZWNrZWRDb25kaXRpb24odHJpZ2dlciwgY2hlY2tlZCwgYXRMZWFzdCA9IHVuZGVmaW5lZCwgYXRNb3N0ID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IHN1cHBvcnRlZEVsZW1lbnRzID0gbmV3IFNldCgpO1xuXG4gICAgICAgIHRyaWdnZXIuZ2V0KCdlbGVtZW50cycpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIC8vIE9ubHkgc3VwcG9ydHMgY2hlY2tib3hlcyBhbmQgcmFkaW8gYnV0dG9uc1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQubWF0Y2hlcygnaW5wdXRbdHlwZT1yYWRpb10sIGlucHV0W3R5cGU9Y2hlY2tib3hdJykpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0ZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQoZWxlbWVudCwgdHJpZ2dlciwgJ2NsaWNrJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50VmFsdWVzID0gbmV3IFNldCgpO1xuXG4gICAgICAgICAgICBzdXBwb3J0ZWRFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQgPT09IGVsZW1lbnQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50VmFsdWVzLmFkZChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGF0TGVhc3QgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRWYWx1ZXMuc2l6ZSA9PT0gc3VwcG9ydGVkRWxlbWVudHMuc2l6ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYXRMZWFzdENvdW50ID0gKGF0TGVhc3QgIT09IHVuZGVmaW5lZCAmJiBNYXRoLmZsb29yKGF0TGVhc3QpID4gMClcbiAgICAgICAgICAgICAgICA/IE1hdGguZmxvb3IoYXRMZWFzdClcbiAgICAgICAgICAgICAgICA6IDE7XG4gICAgICAgICAgICBjb25zdCBhdE1vc3RDb3VudCA9IChhdExlYXN0ICE9PSB1bmRlZmluZWQgJiYgTWF0aC5mbG9vcihhdE1vc3QpID4gMSlcbiAgICAgICAgICAgICAgICA/IE1hdGguZmxvb3IoYXRNb3N0KVxuICAgICAgICAgICAgICAgIDogc3VwcG9ydGVkRWxlbWVudHMuc2l6ZTtcblxuICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRWYWx1ZXMuc2l6ZSA+PSBhdExlYXN0Q291bnQgJiYgZWxlbWVudFZhbHVlcy5zaXplIDw9IGF0TW9zdENvdW50O1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSB0cmlnZ2VyIHRoYXQgZmlyZXMgd2hlbiBhIHRhcmdldCBlbGVtZW50KHMpIGlzIGZvY3VzZWQgb3IgYmx1cnJlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7VHJpZ2dlckVudGl0eX0gdHJpZ2dlclxuICAgICAqL1xuICAgIGNyZWF0ZUZvY3VzZWRDb25kaXRpb24odHJpZ2dlcikge1xuICAgICAgICBjb25zdCBzdXBwb3J0ZWRFbGVtZW50cyA9IG5ldyBTZXQoKTtcblxuICAgICAgICB0cmlnZ2VyLmdldCgnZWxlbWVudHMnKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBBbGwgZWxlbWVudHMgYXJlIHN1cHBvcnRlZCAodGVjaG5pY2FsbHkpXG4gICAgICAgICAgICBzdXBwb3J0ZWRFbGVtZW50cy5hZGQoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN1cHBvcnRlZEVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnQoZWxlbWVudCwgdHJpZ2dlciwgJ2ZvY3VzJyk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50KGVsZW1lbnQsIHRyaWdnZXIsICdibHVyJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoKSA9PiBBcnJheS5mcm9tKHN1cHBvcnRlZEVsZW1lbnRzKS5zb21lKChlbGVtZW50KSA9PiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYW51YWxseSBydW5zIGFsbCByZWdpc3RlcmVkIHRyaWdnZXJzLlxuICAgICAqXG4gICAgICogVGhpcyBjYW4gYmUgdXNlZCB0byB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSB0cmlnZ2Vycy5cbiAgICAgKi9cbiAgICBydW5FdmVudHMoKSB7XG4gICAgICAgIHRoaXMuY29ubmVjdG9ycy5mb3JFYWNoKChlbGVtZW50Q29ubmVjdG9ycykgPT4ge1xuICAgICAgICAgICAgZWxlbWVudENvbm5lY3RvcnMuZm9yRWFjaCgoY29ubmVjdG9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29ubmVjdG9yKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCByZWdpc3RlcmVkIGV2ZW50cy5cbiAgICAgKlxuICAgICAqIFRoaXMgIHdpbGwgZGlzYWJsZSBhbGwgdHJpZ2dlcnMgYW5kIHRoZWlyIGV2ZW50IGxpc3RlbmVycyBvbiB0aGUgdGFyZ2V0IGVsZW1lbnRzLlxuICAgICAqL1xuICAgIHJlc2V0RXZlbnRzKCkge1xuICAgICAgICB0aGlzLmNvbm5lY3RvcnMuZm9yRWFjaCgoZWxlbWVudENvbm5lY3RvcnMsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnRDb25uZWN0b3JzLmZvckVhY2goKGNvbm5lY3RvciwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGNvbm5lY3Rvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb25uZWN0b3JzLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuZXZlbnRzLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRXhlY3V0ZXMgYWN0aW9ucyBiYXNlZCBvbiB0aGUgdHJpZ2dlciBjb25kaXRpb24uXG4gICAgICpcbiAgICAgKiBBY3Rpb25zIHNob3VsZCBiZSBiaW5hcnksIGFuZCBzaG93IG9uZSBzdGF0ZSB3aGVuIHRoZSBjb25kaXRpb24gaXMgbWV0LCBhbmQgYW5vdGhlciB3aGVuIGl0XG4gICAgICogaXMgbm90LiBUaGUgc2Vjb25kIHBhcmFtZXRlciBpcyB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgY29uZGl0aW9ucyBvZiB0aGUgdHJpZ2dlciBoYXZlIGJlZW5cbiAgICAgKiBtZXQuIElmIGEgdHJpZ2dlciBoYXMgbXVsdGlwbGUgY29uZGl0aW9ucywgQUxMIGNvbmRpdGlvbnMgbXVzdCBiZSBtZXQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1RyaWdnZXJFbnRpdHl9IHRyaWdnZXJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmRpdGlvbk1ldFxuICAgICAqL1xuICAgIGV4ZWN1dGVBY3Rpb25zKHRyaWdnZXIsIGNvbmRpdGlvbk1ldCkge1xuICAgICAgICB0aGlzLnBhcnNlQ29tbWFuZCh0cmlnZ2VyLmdldCgnYWN0aW9uJykpLmZvckVhY2goKGFjdGlvbikgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChhY3Rpb24ubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3Nob3cnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2hpZGUnOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvblNob3coXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGlvbi5wYXJhbWV0ZXJzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhY3Rpb24ucGFyYW1ldGVyc1swXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBbdGhpcy5lbGVtZW50XSxcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY3Rpb24ubmFtZSA9PT0gJ3Nob3cnKSA/IGNvbmRpdGlvbk1ldCA6ICFjb25kaXRpb25NZXQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2VuYWJsZSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnZGlzYWJsZSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uRW5hYmxlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIChhY3Rpb24ucGFyYW1ldGVyc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWN0aW9uLnBhcmFtZXRlcnNbMF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW3RoaXMuZWxlbWVudF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWN0aW9uLm5hbWUgPT09ICdlbmFibGUnKSA/IGNvbmRpdGlvbk1ldCA6ICFjb25kaXRpb25NZXQsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2VtcHR5JzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbk1ldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25WYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbk1ldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYWN0aW9uLnBhcmFtZXRlcnNbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChhY3Rpb24ucGFyYW1ldGVyc1swXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW3RoaXMuZWxlbWVudF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3ZhbHVlJzpcbiAgICAgICAgICAgICAgICBjYXNlICd2YWx1ZU9mJzpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb25WYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25NZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAoYWN0aW9uLm5hbWUgPT09ICd2YWx1ZU9mJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYWN0aW9uLnBhcmFtZXRlcnNbMF0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogW3RoaXMuZWxlbWVudF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4oYWN0aW9uLnBhcmFtZXRlcnMubGVuZ3RoID4gMCAmJiBhY3Rpb24ubmFtZSA9PT0gJ3ZhbHVlT2YnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYWN0aW9uLnBhcmFtZXRlcnMuc2xpY2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGFjdGlvbi5wYXJhbWV0ZXJzLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjbGFzcyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnY2xhc3NPZic6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aW9uQ2xhc3MoXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uTWV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgKGFjdGlvbi5uYW1lID09PSAnY2xhc3NPZicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKGFjdGlvbi5wYXJhbWV0ZXJzWzBdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFt0aGlzLmVsZW1lbnRdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uKGFjdGlvbi5uYW1lID09PSAnY2xhc3NPZicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBhY3Rpb24ucGFyYW1ldGVycy5zbGljZSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYWN0aW9uLnBhcmFtZXRlcnMsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2hvd3Mgb3IgaGlkZXMgYSB0cmlnZ2VyIGVsZW1lbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIGFjdGlvbiB3aWxsIHRvZ2dsZSB0aGUgYGhpZGVgIGNsYXNzIG9uIHRoZSBlbGVtZW50LCBhbmQgc2V0IHRoZSBgZGlzcGxheWAgc3R5bGUgdG9cbiAgICAgKiBgbm9uZWAgd2hlbiBoaWRkZW4sIGFuZCB0aGUgb3JpZ2luYWwgZGlzcGxheSB2YWx1ZSB3aGVuIHNob3duLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtUcmlnZ2VyRW50aXR5fSB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudFtdfSBlbGVtZW50c1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc2hvd1xuICAgICAqL1xuICAgIGFjdGlvblNob3codHJpZ2dlciwgZWxlbWVudHMsIHNob3cpIHtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3cgJiYgZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcblxuICAgICAgICAgICAgICAgIGlmICghZWxlbWVudC5kYXRhc2V0Lm9yaWdpbmFsRGlzcGxheSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGVsZW1lbnQuZGF0YXNldC5vcmlnaW5hbERpc3BsYXk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVsZXRlIGVsZW1lbnQuZGF0YXNldC5vcmlnaW5hbERpc3BsYXk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFmdGVyQWN0aW9uKHRyaWdnZXIsIGVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghc2hvdyAmJiBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0Lm9yaWdpbmFsRGlzcGxheSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZGlzcGxheTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmFmdGVyQWN0aW9uKHRyaWdnZXIsIGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIG9yIGRpc2FibGVzIGEgdHJpZ2dlciBlbGVtZW50LlxuICAgICAqXG4gICAgICogVGhpcyBhY3Rpb24gd2lsbCB0b2dnbGUgdGhlIGBjb250cm9sLWRpc2FibGVkYCBjbGFzcyBvbiB0aGUgZWxlbWVudCwgYW5kIHNldCB0aGUgYGRpc2FibGVkYFxuICAgICAqIHByb3BlcnR5IHRvIGB0cnVlYCB3aGVuIGRpc2FibGVkLCBhbmQgYGZhbHNlYCB3aGVuIGVuYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1RyaWdnZXJFbnRpdHl9IHRyaWdnZXJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50W119IGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVcbiAgICAgKi9cbiAgICBhY3Rpb25FbmFibGUodHJpZ2dlciwgZWxlbWVudHMsIGVuYWJsZSkge1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdFsoZW5hYmxlKSA/ICdyZW1vdmUnIDogJ2FkZCddKCdjb250cm9sLWRpc2FibGVkJyk7XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRpc2FibGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmRpc2FibGVkID0gIWVuYWJsZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hZnRlckFjdGlvbih0cmlnZ2VyLCBlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgb2YgZWl0aGVyIHRoZSB0cmlnZ2VyIGVsZW1lbnQgb3IgYSBjaGlsZCBlbGVtZW50KHMpIHdpdGhpbi5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgYSBvbmUtd2F5IGFjdGlvbiBpZiB0aGUgdW5tZXQgdmFsdWUgaXMgbm90IGRlZmluZWQuXG4gICAgICovXG4gICAgYWN0aW9uVmFsdWUodHJpZ2dlciwgY29uZGl0aW9uTWV0LCBlbGVtZW50cywgdmFsdWUsIHVubWV0VmFsdWUgPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKCFjb25kaXRpb25NZXQgJiYgdW5tZXRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IChjb25kaXRpb25NZXQpID8gdmFsdWUgOiB1bm1ldFZhbHVlO1xuXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0W3R5cGU9Y2hlY2tib3hdLCBpbnB1dFt0eXBlPXJhZGlvXScpKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gKGVsZW1lbnQudmFsdWUgPT09IG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbGVtZW50Lm1hdGNoZXMoJ2lucHV0LCBzZWxlY3QsIHRleHRhcmVhJykpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gbmV3VmFsdWU7XG5cbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJBY3Rpb24odHJpZ2dlcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgb3IgcmVtb3ZlcyB0aGUgY2xhc3MgZnJvbSB0aGUgdHJpZ2dlciBlbGVtZW50IG9yIGEgY2hpbGQgZWxlbWVudChzKSB3aXRoaW4uXG4gICAgICpcbiAgICAgKiBUaGlzIHdpbGwgc2ltcGx5IHJlbW92ZSB0aGUgY2xhc3MgaWYgdGhlIHVubWV0IGNsYXNzIGlzIG5vdCBkZWZpbmVkLiBPdGhlcndpc2UsIHRoZSBjbGFzc2VzXG4gICAgICogd2lsbCBiZSB0b2dnbGVkLlxuICAgICAqL1xuICAgIGFjdGlvbkNsYXNzKHRyaWdnZXIsIGNvbmRpdGlvbk1ldCwgZWxlbWVudHMsIGNzc0NsYXNzLCB1bm1ldENzc0NsYXNzID0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmIChjb25kaXRpb25NZXQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGlmICh1bm1ldENzc0NsYXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh1bm1ldENzc0NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjc3NDbGFzcyk7XG4gICAgICAgICAgICAgICAgaWYgKHVubWV0Q3NzQ2xhc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHVubWV0Q3NzQ2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5hZnRlckFjdGlvbih0cmlnZ2VyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWZ0ZXJBY3Rpb24odHJpZ2dlciwgZWxlbWVudCkge1xuICAgICAgICB0aGlzLnNub3dib2FyZC5kZWJ1ZygnVHJpZ2dlciBmaXJlZCcsIGVsZW1lbnQsIHRyaWdnZXIpO1xuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgndHJpZ2dlci5maXJlZCcsIGVsZW1lbnQsIHRyaWdnZXIpO1xuICAgIH1cbn1cbiIsIi8qKlxuICogSW50ZXJuYWwgcHJveHkgZm9yIFNub3dib2FyZC5cbiAqXG4gKiBUaGlzIGhhbmRsZXIgd3JhcHMgdGhlIFNub3dib2FyZCBpbnN0YW5jZSB0aGF0IGlzIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3Igb2YgcGx1Z2luIGluc3RhbmNlcy5cbiAqIEl0IHByZXZlbnRzIGFjY2VzcyB0byB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XG4gKiAgLSBgYXR0YWNoQWJzdHJhY3RzYDogTm8gbmVlZCB0byBhdHRhY2ggYWJzdHJhY3RzIGFnYWluLlxuICogIC0gYGxvYWRVdGlsdGllc2A6IE5vIG5lZWQgdG8gbG9hZCB1dGlsaXRpZXMgYWdhaW4uXG4gKiAgLSBgaW5pdGlhbGlzZWA6IFNub3dib2FyZCBpcyBhbHJlYWR5IGluaXRpYWxpc2VkLlxuICogIC0gYGluaXRpYWxpc2VTaW5nbGV0b25zYDogU2luZ2xldG9ucyBhcmUgYWxyZWFkeSBpbml0aWFsaXNlZC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKFsnYXR0YWNoQWJzdHJhY3RzJywgJ2xvYWRVdGlsaXRpZXMnLCAnaW5pdGlhbGlzZScsICdpbml0aWFsaXNlU2luZ2xldG9ucyddLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2Fubm90IHVzZSB0aGUgXCIke3Byb3B9XCIgU25vd2JvYXJkIG1ldGhvZCB3aXRoaW4gYSBwbHVnaW4uYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzUGx1Z2luKHByb3BMb3dlcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC4uLnBhcmFtcykgPT4gUmVmbGVjdC5nZXQodGFyZ2V0LCAncGx1Z2lucycpW3Byb3BMb3dlcl0uZ2V0SW5zdGFuY2UoLi4ucGFyYW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICB9LFxuXG4gICAgaGFzKHRhcmdldCwgcHJvcCkge1xuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wTG93ZXIgPSBwcm9wLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmIChbJ2F0dGFjaEFic3RyYWN0cycsICdsb2FkVXRpbGl0aWVzJywgJ2luaXRpYWxpc2UnLCAnaW5pdGlhbGlzZVNpbmdsZXRvbnMnXS5pbmNsdWRlcyhwcm9wKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuaW1wb3J0IElubmVyUHJveHlIYW5kbGVyIGZyb20gJy4vSW5uZXJQcm94eUhhbmRsZXInO1xuXG4vKipcbiAqIFBsdWdpbiBsb2FkZXIgY2xhc3MuXG4gKlxuICogVGhpcyBpcyBhIHByb3ZpZGVyIChmYWN0b3J5KSBjbGFzcyBmb3IgYSBzaW5nbGUgcGx1Z2luIGFuZCBwcm92aWRlcyB0aGUgbGluayBiZXR3ZWVuIFNub3dib2FyZCBmcmFtZXdvcmsgZnVuY3Rpb25hbGl0eVxuICogYW5kIHRoZSB1bmRlcmx5aW5nIHBsdWdpbiBpbnN0YW5jZXMuIEl0IGFsc28gcHJvdmlkZXMgc29tZSBiYXNpYyBtb2NraW5nIG9mIHBsdWdpbiBtZXRob2RzIGZvciB0ZXN0aW5nLlxuICpcbiAqIEBjb3B5cmlnaHQgMjAyMSBXaW50ZXIuXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbHVnaW5Mb2FkZXIge1xuICAgIC8qKlxuICAgICAqIENvbnN0cnVjdG9yLlxuICAgICAqXG4gICAgICogQmluZHMgdGhlIFdpbnRlciBmcmFtZXdvcmsgdG8gdGhlIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1Nub3dib2FyZH0gc25vd2JvYXJkXG4gICAgICogQHBhcmFtIHtQbHVnaW5CYXNlfSBpbnN0YW5jZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHNub3dib2FyZCwgaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5zbm93Ym9hcmQgPSBuZXcgUHJveHkoXG4gICAgICAgICAgICBzbm93Ym9hcmQsXG4gICAgICAgICAgICBJbm5lclByb3h5SGFuZGxlcixcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuXG4gICAgICAgIC8vIEZyZWV6ZSBpbnN0YW5jZSB0aGF0IGhhcyBiZWVuIGluc2VydGVkIGludG8gdGhpcyBsb2FkZXJcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLmluc3RhbmNlKTtcblxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IFtdO1xuICAgICAgICB0aGlzLnNpbmdsZXRvbiA9IHtcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gUHJldmVudCBmdXJ0aGVyIGV4dGVuc2lvbiBvZiB0aGUgc2luZ2xldG9uIHN0YXR1cyBvYmplY3RcbiAgICAgICAgT2JqZWN0LnNlYWwodGhpcy5zaW5nbGV0b24pO1xuXG4gICAgICAgIHRoaXMubW9ja3MgPSB7fTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEZ1bmN0aW9ucyA9IHt9O1xuXG4gICAgICAgIC8vIEZyZWV6ZSBsb2FkZXIgaXRzZWxmXG4gICAgICAgIE9iamVjdC5mcmVlemUoUGx1Z2luTG9hZGVyLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiB0aGUgY3VycmVudCBwbHVnaW4gaGFzIGEgc3BlY2lmaWMgbWV0aG9kIGF2YWlsYWJsZS5cbiAgICAgKlxuICAgICAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbWV0aG9kTmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc01ldGhvZChtZXRob2ROYW1lKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPT09ICdmdW5jdGlvbicpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgcHJvdG90eXBlIG1ldGhvZCBmb3IgYSBwbHVnaW4uIFRoaXMgc2hvdWxkIGdlbmVyYWxseSBiZSB1c2VkIGZvciBcInN0YXRpY1wiIGNhbGxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG1ldGhvZE5hbWVcbiAgICAgKiBAcGFyYW0gey4uLn0gYXJnc1xuICAgICAqIEByZXR1cm5zIHthbnl9XG4gICAgICovXG4gICAgY2FsbE1ldGhvZCguLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcmdzID0gcGFyYW1ldGVycztcbiAgICAgICAgY29uc3QgbWV0aG9kTmFtZSA9IGFyZ3Muc2hpZnQoKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0oYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpbnN0YW5jZSBvZiB0aGUgY3VycmVudCBwbHVnaW4uXG4gICAgICpcbiAgICAgKiAtIElmIHRoaXMgaXMgYSBjYWxsYmFjayBmdW5jdGlvbiBwbHVnaW4sIHRoZSBmdW5jdGlvbiB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqIC0gSWYgdGhpcyBpcyBhIHNpbmdsZXRvbiwgdGhlIHNpbmdsZSBpbnN0YW5jZSBvZiB0aGUgcGx1Z2luIHdpbGwgYmUgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7UGx1Z2luQmFzZXxGdW5jdGlvbn1cbiAgICAgKi9cbiAgICBnZXRJbnN0YW5jZSguLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICBjb25zdCB1bm1ldCA9IHRoaXMuZ2V0RGVwZW5kZW5jaWVzKCkuZmlsdGVyKChpdGVtKSA9PiAhdGhpcy5zbm93Ym9hcmQuZ2V0UGx1Z2luTmFtZXMoKS5pbmNsdWRlcyhpdGVtKSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcIiR7dGhpcy5uYW1lfVwiIHBsdWdpbiByZXF1aXJlcyB0aGUgZm9sbG93aW5nIHBsdWdpbnM6ICR7dW5tZXQuam9pbignLCAnKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlU2luZ2xldG9uKC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBcHBseSBtb2NrZWQgbWV0aG9kc1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubW9ja3MpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLm9yaWdpbmFsRnVuY3Rpb25zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VzWzBdW21ldGhvZE5hbWVdID0gY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5tb2NrcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgW21ldGhvZE5hbWUsIGNhbGxiYWNrXSA9IGVudHJ5O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9ICguLi5wYXJhbXMpID0+IGNhbGxiYWNrKHRoaXMsIC4uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGx5IG1vY2tlZCBtZXRob2RzIHRvIHByb3RvdHlwZVxuICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5tb2NrcykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5vcmlnaW5hbEZ1bmN0aW9ucykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSBjYWxsYmFjaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5tb2NrcykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBbbWV0aG9kTmFtZSwgY2FsbGJhY2tdID0gZW50cnk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV0gPSAoLi4ucGFyYW1zKSA9PiBjYWxsYmFjayh0aGlzLCAuLi5wYXJhbXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXdJbnN0YW5jZSA9IG5ldyB0aGlzLmluc3RhbmNlKHRoaXMuc25vd2JvYXJkLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuZGV0YWNoID0gKCkgPT4gdGhpcy5pbnN0YW5jZXMuc3BsaWNlKHRoaXMuaW5zdGFuY2VzLmluZGV4T2YobmV3SW5zdGFuY2UpLCAxKTtcbiAgICAgICAgbmV3SW5zdGFuY2UuY29uc3RydWN0KC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICB0aGlzLmluc3RhbmNlcy5wdXNoKG5ld0luc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gbmV3SW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbGwgaW5zdGFuY2VzIG9mIHRoZSBjdXJyZW50IHBsdWdpbi5cbiAgICAgKlxuICAgICAqIElmIHRoaXMgcGx1Z2luIGlzIGEgY2FsbGJhY2sgZnVuY3Rpb24gcGx1Z2luLCBhbiBlbXB0eSBhcnJheSB3aWxsIGJlIHJldHVybmVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkJhc2VbXX1cbiAgICAgKi9cbiAgICBnZXRJbnN0YW5jZXMoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgdGhlIGN1cnJlbnQgcGx1Z2luIGlzIGEgc2ltcGxlIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNGdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGhpcy5pbnN0YW5jZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmluc3RhbmNlLnByb3RvdHlwZSBpbnN0YW5jZW9mIFBsdWdpbkJhc2UgPT09IGZhbHNlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBpcyBhIHNpbmdsZXRvbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzU2luZ2xldG9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBTaW5nbGV0b24gPT09IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHNpbmdsZXRvbiBoYXMgYmVlbiBpbml0aWFsaXNlZC5cbiAgICAgKlxuICAgICAqIE5vcm1hbCBwbHVnaW5zIHdpbGwgYWx3YXlzIHJldHVybiB0cnVlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNJbml0aWFsaXNlZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xldG9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2luZ2xldG9uLmluaXRpYWxpc2VkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluaXRpYWxpc2VzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBpbml0aWFsaXNlU2luZ2xldG9uKC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xldG9uKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5ld0luc3RhbmNlID0gbmV3IHRoaXMuaW5zdGFuY2UodGhpcy5zbm93Ym9hcmQsIC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICBuZXdJbnN0YW5jZS5kZXRhY2ggPSAoKSA9PiB0aGlzLmluc3RhbmNlcy5zcGxpY2UodGhpcy5pbnN0YW5jZXMuaW5kZXhPZihuZXdJbnN0YW5jZSksIDEpO1xuICAgICAgICBuZXdJbnN0YW5jZS5jb25zdHJ1Y3QoLi4ucGFyYW1ldGVycyk7XG4gICAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2gobmV3SW5zdGFuY2UpO1xuICAgICAgICB0aGlzLnNpbmdsZXRvbi5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZGVwZW5kZW5jaWVzIG9mIHRoZSBjdXJyZW50IHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX1cbiAgICAgKi9cbiAgICBnZXREZXBlbmRlbmNpZXMoKSB7XG4gICAgICAgIC8vIENhbGxiYWNrIGZ1bmN0aW9ucyBjYW5ub3QgaGF2ZSBkZXBlbmRlbmNpZXMuXG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gZGVwZW5kZW5jeSBtZXRob2Qgc3BlY2lmaWVkLlxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlLmRlcGVuZGVuY2llcyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2UucHJvdG90eXBlLmRlcGVuZGVuY2llcygpLm1hcCgoaXRlbSkgPT4gaXRlbS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIHRoZSBjdXJyZW50IHBsdWdpbiBoYXMgYWxsIGl0cyBkZXBlbmRlbmNpZXMgZnVsZmlsbGVkLlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGVwZW5kZW5jaWVzRnVsZmlsbGVkKCkge1xuICAgICAgICBjb25zdCBkZXBlbmRlbmNpZXMgPSB0aGlzLmdldERlcGVuZGVuY2llcygpO1xuXG4gICAgICAgIGxldCBmdWxmaWxsZWQgPSB0cnVlO1xuICAgICAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc25vd2JvYXJkLmhhc1BsdWdpbihwbHVnaW4pKSB7XG4gICAgICAgICAgICAgICAgZnVsZmlsbGVkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmdWxmaWxsZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIGEgbWV0aG9kIG9mIGFuIGluc3RhbmNlIHRvIGJlIG1vY2tlZCBmb3IgdGVzdGluZy5cbiAgICAgKlxuICAgICAqIFRoaXMgbW9jayB3aWxsIGJlIGFwcGxpZWQgZm9yIHRoZSBsaWZlIG9mIGFuIGluc3RhbmNlLiBGb3Igc2luZ2xldG9ucywgdGhlIG1vY2sgd2lsbCBiZSBhcHBsaWVkIGZvciB0aGUgbGlmZVxuICAgICAqIG9mIHRoZSBwYWdlLlxuICAgICAqXG4gICAgICogTW9ja3MgY2Fubm90IGJlIGFwcGxpZWQgdG8gY2FsbGJhY2sgZnVuY3Rpb24gcGx1Z2lucy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICBtb2NrKG1ldGhvZE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlLnByb3RvdHlwZVttZXRob2ROYW1lXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGdW5jdGlvbiBcIiR7bWV0aG9kTmFtZX1cIiBkb2VzIG5vdCBleGlzdCBhbmQgY2Fubm90IGJlIG1vY2tlZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tb2Nrc1ttZXRob2ROYW1lXSA9IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLm9yaWdpbmFsRnVuY3Rpb25zW21ldGhvZE5hbWVdID0gdGhpcy5pbnN0YW5jZS5wcm90b3R5cGVbbWV0aG9kTmFtZV07XG5cbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGV0b24oKSAmJiB0aGlzLmluc3RhbmNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuXG4gICAgICAgICAgICAvLyBBcHBseSBtb2NrZWQgbWV0aG9kXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9ICguLi5wYXJhbWV0ZXJzKSA9PiBjYWxsYmFjayh0aGlzLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBtb2NrIGNhbGxiYWNrIGZyb20gZnV0dXJlIGluc3RhbmNlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lXG4gICAgICovXG4gICAgdW5tb2NrKG1ldGhvZE5hbWUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLm1vY2tzW21ldGhvZE5hbWVdKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZXRvbigpKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc1swXVttZXRob2ROYW1lXSA9IHRoaXMub3JpZ2luYWxGdW5jdGlvbnNbbWV0aG9kTmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICBkZWxldGUgdGhpcy5tb2Nrc1ttZXRob2ROYW1lXTtcbiAgICAgICAgZGVsZXRlIHRoaXMub3JpZ2luYWxGdW5jdGlvbnNbbWV0aG9kTmFtZV07XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoLi4ucGFyYW1zKSA9PiBSZWZsZWN0LmdldCh0YXJnZXQsICdwbHVnaW5zJylbcHJvcExvd2VyXS5nZXRJbnN0YW5jZSguLi5wYXJhbXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgIH0sXG5cbiAgICBoYXModGFyZ2V0LCBwcm9wKSB7XG4gICAgICAgIGlmICh0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BMb3dlciA9IHByb3AudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNQbHVnaW4ocHJvcExvd2VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcCk7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgUGx1Z2luQmFzZSBmcm9tICcuLi9hYnN0cmFjdHMvUGx1Z2luQmFzZSc7XG5pbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuaW1wb3J0IFBsdWdpbkxvYWRlciBmcm9tICcuL1BsdWdpbkxvYWRlcic7XG5cbmltcG9ydCBDb29raWUgZnJvbSAnLi4vdXRpbGl0aWVzL0Nvb2tpZSc7XG5pbXBvcnQgSnNvblBhcnNlciBmcm9tICcuLi91dGlsaXRpZXMvSnNvblBhcnNlcic7XG5pbXBvcnQgU2FuaXRpemVyIGZyb20gJy4uL3V0aWxpdGllcy9TYW5pdGl6ZXInO1xuaW1wb3J0IFVybCBmcm9tICcuLi91dGlsaXRpZXMvVXJsJztcblxuLyoqXG4gKiBTbm93Ym9hcmQgLSB0aGUgV2ludGVyIEphdmFTY3JpcHQgZnJhbWV3b3JrLlxuICpcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgYmFzZSBvZiBhIG1vZGVybiB0YWtlIG9uIHRoZSBXaW50ZXIgSlMgZnJhbWV3b3JrLCBiZWluZyBmdWxseSBleHRlbnNpYmxlIGFuZCB0YWtpbmcgYWR2YW50YWdlXG4gKiBvZiBtb2Rlcm4gSmF2YVNjcmlwdCBmZWF0dXJlcyBieSBsZXZlcmFnaW5nIHRoZSBMYXJhdmVsIE1peCBjb21waWxhdGlvbiBmcmFtZXdvcmsuIEl0IGFsc28gaXMgY29kZWQgdXAgdG8gcmVtb3ZlIHRoZVxuICogZGVwZW5kZW5jeSBvZiBqUXVlcnkuXG4gKlxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKiBAbGluayBodHRwczovL3dpbnRlcmNtcy5jb20vZG9jcy9zbm93Ym9hcmQvaW50cm9kdWN0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNub3dib2FyZCB7XG4gICAgLyoqXG4gICAgICogQ29uc3RydWN0b3IuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGF1dG9TaW5nbGV0b25zIEF1dG9tYXRpY2FsbHkgbG9hZCBzaW5nbGV0b25zIHdoZW4gRE9NIGlzIHJlYWR5LiBEZWZhdWx0OiBgdHJ1ZWAuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBkZWJ1ZyBXaGV0aGVyIGRlYnVnZ2luZyBsb2dzIHNob3VsZCBiZSBzaG93bi4gRGVmYXVsdDogYGZhbHNlYC5cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihhdXRvU2luZ2xldG9ucywgZGVidWcpIHtcbiAgICAgICAgdGhpcy5kZWJ1Z0VuYWJsZWQgPSAodHlwZW9mIGRlYnVnID09PSAnYm9vbGVhbicgJiYgZGVidWcgPT09IHRydWUpO1xuICAgICAgICB0aGlzLmF1dG9Jbml0U2luZ2xldG9ucyA9ICh0eXBlb2YgYXV0b1NpbmdsZXRvbnMgPT09ICdib29sZWFuJyAmJiBhdXRvU2luZ2xldG9ucyA9PT0gZmFsc2UpO1xuICAgICAgICB0aGlzLnBsdWdpbnMgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSBudWxsO1xuICAgICAgICB0aGlzLnJlYWRpbmVzcyA9IHtcbiAgICAgICAgICAgIGRvbTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgICAgIC8vIFNlYWwgcmVhZGluZXNzIGZyb20gYmVpbmcgYWRkZWQgdG8gZnVydGhlciwgYnV0IGFsbG93IHRoZSBwcm9wZXJ0aWVzIHRvIGJlIG1vZGlmaWVkLlxuICAgICAgICBPYmplY3Quc2VhbCh0aGlzLnJlYWRpbmVzcyk7XG4gICAgICAgIHRoaXMuYXR0YWNoQWJzdHJhY3RzKCk7XG5cbiAgICAgICAgLy8gRnJlZXplIHRoZSBTbm93Ym9hcmQgY2xhc3MgdG8gcHJldmVudCBmdXJ0aGVyIG1vZGlmaWNhdGlvbnMuXG4gICAgICAgIE9iamVjdC5mcmVlemUoU25vd2JvYXJkLnByb3RvdHlwZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcyk7XG5cbiAgICAgICAgdGhpcy5sb2FkVXRpbGl0aWVzKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbGlzZSgpO1xuXG4gICAgICAgIHRoaXMuZGVidWcoJ1Nub3dib2FyZCBmcmFtZXdvcmsgaW5pdGlhbGlzZWQnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhYnN0cmFjdCBjbGFzc2VzIGFzIHByb3BlcnRpZXMgb2YgdGhlIFNub3dib2FyZCBjbGFzcy5cbiAgICAgKlxuICAgICAqIFRoaXMgd2lsbCBhbGxvdyBKYXZhc2NyaXB0IGZ1bmN0aW9uYWxpdHkgd2l0aCBubyBidWlsZCBwcm9jZXNzIHRvIHN0aWxsIGV4dGVuZCB0aGVzZSBhYnN0cmFjdHMgYnkgcHJlZml4aW5nXG4gICAgICogdGhlbSB3aXRoIFwiU25vd2JvYXJkXCIuXG4gICAgICpcbiAgICAgKiBgYGBcbiAgICAgKiBjbGFzcyBNeUNsYXNzIGV4dGVuZHMgU25vd2JvYXJkLlBsdWdpbkJhc2Uge1xuICAgICAqICAgICAuLi5cbiAgICAgKiB9XG4gICAgICogYGBgXG4gICAgICovXG4gICAgYXR0YWNoQWJzdHJhY3RzKCkge1xuICAgICAgICB0aGlzLlBsdWdpbkJhc2UgPSBQbHVnaW5CYXNlO1xuICAgICAgICB0aGlzLlNpbmdsZXRvbiA9IFNpbmdsZXRvbjtcblxuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuUGx1Z2luQmFzZS5wcm90b3R5cGUpO1xuICAgICAgICBPYmplY3QuZnJlZXplKHRoaXMuUGx1Z2luQmFzZSk7XG4gICAgICAgIE9iamVjdC5mcmVlemUodGhpcy5TaW5nbGV0b24ucHJvdG90eXBlKTtcbiAgICAgICAgT2JqZWN0LmZyZWV6ZSh0aGlzLlNpbmdsZXRvbik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZHMgdGhlIGRlZmF1bHQgdXRpbGl0aWVzLlxuICAgICAqL1xuICAgIGxvYWRVdGlsaXRpZXMoKSB7XG4gICAgICAgIHRoaXMuYWRkUGx1Z2luKCdjb29raWUnLCBDb29raWUpO1xuICAgICAgICB0aGlzLmFkZFBsdWdpbignanNvblBhcnNlcicsIEpzb25QYXJzZXIpO1xuICAgICAgICB0aGlzLmFkZFBsdWdpbignc2FuaXRpemVyJywgU2FuaXRpemVyKTtcbiAgICAgICAgdGhpcy5hZGRQbHVnaW4oJ3VybCcsIFVybCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgdGhlIGZyYW1ld29yay5cbiAgICAgKlxuICAgICAqIEF0dGFjaGVzIGEgbGlzdGVuZXIgZm9yIHRoZSBET00gYmVpbmcgcmVhZHkgYW5kIHRyaWdnZXJzIGEgZ2xvYmFsIFwicmVhZHlcIiBldmVudCBmb3IgcGx1Z2lucyB0byBiZWdpbiBhdHRhY2hpbmdcbiAgICAgKiB0aGVtc2VsdmVzIHRvIHRoZSBET00uXG4gICAgICovXG4gICAgaW5pdGlhbGlzZSgpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvSW5pdFNpbmdsZXRvbnMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VTaW5nbGV0b25zKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmdsb2JhbEV2ZW50KCdyZWFkeScpO1xuICAgICAgICAgICAgdGhpcy5yZWFkaW5lc3MuZG9tID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgYW4gaW5zdGFuY2Ugb2YgZXZlcnkgc2luZ2xldG9uLlxuICAgICAqL1xuICAgIGluaXRpYWxpc2VTaW5nbGV0b25zKCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucGx1Z2lucykuZm9yRWFjaCgocGx1Z2luKSA9PiB7XG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzU2luZ2xldG9uKCkgJiYgcGx1Z2luLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2luLmluaXRpYWxpc2VTaW5nbGV0b24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHBsdWdpbiB0byB0aGUgZnJhbWV3b3JrLlxuICAgICAqXG4gICAgICogUGx1Z2lucyBhcmUgdGhlIGNvcm5lcnN0b25lIGZvciBhZGRpdGlvbmFsIGZ1bmN0aW9uYWxpdHkgZm9yIFNub3dib2FyZC4gQSBwbHVnaW4gbXVzdCBlaXRoZXIgYmUgYW4gRVMyMDE1IGNsYXNzXG4gICAgICogdGhhdCBleHRlbmRzIHRoZSBQbHVnaW5CYXNlIG9yIFNpbmdsZXRvbiBhYnN0cmFjdCBjbGFzc2VzLCBvciBhIHNpbXBsZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKlxuICAgICAqIFdoZW4gYSBwbHVnaW4gaXMgYWRkZWQsIGl0IGlzIGF1dG9tYXRpY2FsbHkgYXNzaWduZWQgYXMgYSBuZXcgbWFnaWMgbWV0aG9kIGluIHRoZSBTbm93Ym9hcmQgY2xhc3MgdXNpbmcgdGhlIG5hbWVcbiAgICAgKiBwYXJhbWV0ZXIsIGFuZCBjYW4gYmUgY2FsbGVkIHZpYSB0aGlzIG1ldGhvZC4gVGhpcyBtZXRob2Qgd2lsbCBhbHdheXMgYmUgdGhlIFwibG93ZXJjYXNlXCIgdmVyc2lvbiBvZiB0aGlzIG5hbWUuXG4gICAgICpcbiAgICAgKiBGb3IgZXhhbXBsZSwgaWYgYSBwbHVnaW4gaXMgYXNzaWduZWQgdG8gdGhlIG5hbWUgXCJteVBsdWdpblwiLCBpdCBjYW4gYmUgY2FsbGVkIHZpYSBgU25vd2JvYXJkLm15cGx1Z2luKClgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge1BsdWdpbkJhc2V8RnVuY3Rpb259IGluc3RhbmNlXG4gICAgICovXG4gICAgYWRkUGx1Z2luKG5hbWUsIGluc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAodGhpcy5oYXNQbHVnaW4obG93ZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBIHBsdWdpbiBjYWxsZWQgXCIke25hbWV9XCIgaXMgYWxyZWFkeSByZWdpc3RlcmVkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbnN0YW5jZSAhPT0gJ2Z1bmN0aW9uJyAmJiBpbnN0YW5jZSBpbnN0YW5jZW9mIFBsdWdpbkJhc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwcm92aWRlZCBwbHVnaW4gbXVzdCBleHRlbmQgdGhlIFBsdWdpbkJhc2UgY2xhc3MsIG9yIG11c3QgYmUgYSBjYWxsYmFjayBmdW5jdGlvbi4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzW25hbWVdICE9PSB1bmRlZmluZWQgfHwgdGhpc1tsb3dlck5hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGdpdmVuIG5hbWUgaXMgYWxyZWFkeSBpbiB1c2UgZm9yIGEgcHJvcGVydHkgb3IgbWV0aG9kIG9mIHRoZSBTbm93Ym9hcmQgY2xhc3MuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXSA9IG5ldyBQbHVnaW5Mb2FkZXIobG93ZXJOYW1lLCB0aGlzLCBpbnN0YW5jZSk7XG5cbiAgICAgICAgdGhpcy5kZWJ1ZyhgUGx1Z2luIFwiJHtuYW1lfVwiIHJlZ2lzdGVyZWRgKTtcblxuICAgICAgICAvLyBDaGVjayBpZiBhbnkgc2luZ2xldG9ucyBub3cgaGF2ZSB0aGVpciBkZXBlbmRlbmNpZXMgZnVsZmlsbGVkLCBhbmQgZmlyZSB0aGVpciBcInJlYWR5XCIgaGFuZGxlciBpZiB3ZSdyZVxuICAgICAgICAvLyBpbiBhIHJlYWR5IHN0YXRlLlxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZ2V0UGx1Z2lucygpKS5mb3JFYWNoKChwbHVnaW4pID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwbHVnaW4uaXNTaW5nbGV0b24oKVxuICAgICAgICAgICAgICAgICYmICFwbHVnaW4uaXNJbml0aWFsaXNlZCgpXG4gICAgICAgICAgICAgICAgJiYgcGx1Z2luLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpXG4gICAgICAgICAgICAgICAgJiYgcGx1Z2luLmhhc01ldGhvZCgnbGlzdGVucycpXG4gICAgICAgICAgICAgICAgJiYgT2JqZWN0LmtleXMocGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKSkuaW5jbHVkZXMoJ3JlYWR5JylcbiAgICAgICAgICAgICAgICAmJiB0aGlzLnJlYWRpbmVzcy5kb21cbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlYWR5TWV0aG9kID0gcGx1Z2luLmNhbGxNZXRob2QoJ2xpc3RlbnMnKS5yZWFkeTtcbiAgICAgICAgICAgICAgICBwbHVnaW4uY2FsbE1ldGhvZChyZWFkeU1ldGhvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBwbHVnaW4uXG4gICAgICpcbiAgICAgKiBSZW1vdmVzIGEgcGx1Z2luIGZyb20gU25vd2JvYXJkLCBjYWxsaW5nIHRoZSBkZXN0cnVjdG9yIG1ldGhvZCBmb3IgYWxsIGFjdGl2ZSBpbnN0YW5jZXMgb2YgdGhlIHBsdWdpbi5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgcmVtb3ZlUGx1Z2luKG5hbWUpIHtcbiAgICAgICAgY29uc3QgbG93ZXJOYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghdGhpcy5oYXNQbHVnaW4obG93ZXJOYW1lKSkge1xuICAgICAgICAgICAgdGhpcy5kZWJ1ZyhgUGx1Z2luIFwiJHtuYW1lfVwiIGFscmVhZHkgcmVtb3ZlZGApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2FsbCBkZXN0cnVjdG9ycyBmb3IgYWxsIGluc3RhbmNlc1xuICAgICAgICB0aGlzLnBsdWdpbnNbbG93ZXJOYW1lXS5nZXRJbnN0YW5jZXMoKS5mb3JFYWNoKChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgaW5zdGFuY2UuZGVzdHJ1Y3QoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGVsZXRlIHRoaXMucGx1Z2luc1tsb3dlck5hbWVdO1xuICAgICAgICBkZWxldGUgdGhpc1tsb3dlck5hbWVdO1xuICAgICAgICBkZWxldGUgdGhpc1tuYW1lXTtcblxuICAgICAgICB0aGlzLmRlYnVnKGBQbHVnaW4gXCIke25hbWV9XCIgcmVtb3ZlZGApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBwbHVnaW4gaGFzIGJlZW4gcmVnaXN0ZXJlZCBhbmQgaXMgYWN0aXZlLlxuICAgICAqXG4gICAgICogQSBwbHVnaW4gdGhhdCBpcyBzdGlsbCB3YWl0aW5nIGZvciBkZXBlbmRlbmNpZXMgdG8gYmUgcmVnaXN0ZXJlZCB3aWxsIG5vdCBiZSBhY3RpdmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGhhc1BsdWdpbihuYW1lKSB7XG4gICAgICAgIGNvbnN0IGxvd2VyTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICByZXR1cm4gKHRoaXMucGx1Z2luc1tsb3dlck5hbWVdICE9PSB1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgcmVnaXN0ZXJlZCBwbHVnaW5zIGFzIFBsdWdpbkxvYWRlciBvYmplY3RzLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkxvYWRlcltdfVxuICAgICAqL1xuICAgIGdldFBsdWdpbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBsdWdpbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBhcnJheSBvZiByZWdpc3RlcmVkIHBsdWdpbnMsIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119XG4gICAgICovXG4gICAgZ2V0UGx1Z2luTmFtZXMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnBsdWdpbnMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBQbHVnaW5Mb2FkZXIgb2JqZWN0IG9mIGEgZ2l2ZW4gcGx1Z2luLlxuICAgICAqXG4gICAgICogQHJldHVybnMge1BsdWdpbkxvYWRlcn1cbiAgICAgKi9cbiAgICBnZXRQbHVnaW4obmFtZSkge1xuICAgICAgICBjb25zdCBsb3dlck5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhhc1BsdWdpbihsb3dlck5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHBsdWdpbiBjYWxsZWQgXCIke2xvd2VyTmFtZX1cIiBoYXMgYmVlbiByZWdpc3RlcmVkLmApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucGx1Z2luc1tsb3dlck5hbWVdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmRzIGFsbCBwbHVnaW5zIHRoYXQgbGlzdGVuIHRvIHRoZSBnaXZlbiBldmVudC5cbiAgICAgKlxuICAgICAqIFRoaXMgd29ya3MgZm9yIGJvdGggbm9ybWFsIGFuZCBwcm9taXNlIGV2ZW50cy4gSXQgZG9lcyBOT1QgY2hlY2sgdGhhdCB0aGUgcGx1Z2luJ3MgbGlzdGVuZXIgYWN0dWFsbHkgZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gVGhlIG5hbWUgb2YgdGhlIHBsdWdpbnMgdGhhdCBhcmUgbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQuXG4gICAgICovXG4gICAgbGlzdGVuc1RvRXZlbnQoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXTtcblxuICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnBsdWdpbnMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgcGx1Z2luXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzRnVuY3Rpb24oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcGx1Z2luLmRlcGVuZGVuY2llc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFwbHVnaW4uaGFzTWV0aG9kKCdsaXN0ZW5zJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzW2V2ZW50TmFtZV0gPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBsaXN0ZW5lcnNbZXZlbnROYW1lXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHBsdWdpbnMucHVzaChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHBsdWdpbnM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgc2ltcGxlIHJlYWR5IGxpc3RlbmVyLlxuICAgICAqXG4gICAgICogU3lub255bW91cyB3aXRoIGpRdWVyeSdzIFwiJChkb2N1bWVudCkucmVhZHkoKVwiIGZ1bmN0aW9uYWxpdHksIHRoaXMgYWxsb3dzIGlubGluZSBzY3JpcHRzIHRvXG4gICAgICogYXR0YWNoIHRoZW1zZWx2ZXMgdG8gU25vd2JvYXJkIGltbWVkaWF0ZWx5IGJ1dCBvbmx5IGZpcmUgd2hlbiB0aGUgRE9NIGlzIHJlYWR5LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKi9cbiAgICByZWFkeShjYWxsYmFjaykge1xuICAgICAgICBpZiAodGhpcy5yZWFkaW5lc3MuZG9tKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbigncmVhZHknLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHNpbXBsZSBsaXN0ZW5lciBmb3IgYW4gZXZlbnQuXG4gICAgICpcbiAgICAgKiBUaGlzIGNhbiBiZSB1c2VkIGZvciBhZC1ob2Mgc2NyaXB0cyB0aGF0IGRvbid0IG5lZWQgYSBmdWxsIHBsdWdpbi4gVGhlIGdpdmVuIGNhbGxiYWNrIHdpbGwgYmVcbiAgICAgKiBjYWxsZWQgd2hlbiB0aGUgZXZlbnQgbmFtZSBwcm92aWRlZCBmaXJlcy4gVGhpcyB3b3JrcyBmb3IgYm90aCBub3JtYWwgYW5kIFByb21pc2UgZXZlbnRzLiBGb3JcbiAgICAgKiBhIFByb21pc2UgZXZlbnQsIHlvdXIgY2FsbGJhY2sgbXVzdCByZXR1cm4gYSBQcm9taXNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50TmFtZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICovXG4gICAgb24oZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIXRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5pbmNsdWRlcyhjYWxsYmFjaykpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgc2ltcGxlIGxpc3RlbmVyIGZvciBhbiBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIG9mZihldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmluZGV4T2YoY2FsbGJhY2spO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2FsbHMgYSBnbG9iYWwgZXZlbnQgdG8gYWxsIHJlZ2lzdGVyZWQgcGx1Z2lucy5cbiAgICAgKlxuICAgICAqIElmIGFueSBwbHVnaW4gcmV0dXJucyBhIGBmYWxzZWAsIHRoZSBldmVudCBpcyBjb25zaWRlcmVkIGNhbmNlbGxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gSWYgZXZlbnQgd2FzIG5vdCBjYW5jZWxsZWRcbiAgICAgKi9cbiAgICBnbG9iYWxFdmVudChldmVudE5hbWUsIC4uLnBhcmFtZXRlcnMpIHtcbiAgICAgICAgdGhpcy5kZWJ1ZyhgQ2FsbGluZyBnbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cImAsIC4uLnBhcmFtZXRlcnMpO1xuXG4gICAgICAgIC8vIEZpbmQgcGx1Z2lucyBsaXN0ZW5pbmcgdG8gdGhlIGV2ZW50LlxuICAgICAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbnNUb0V2ZW50KGV2ZW50TmFtZSk7XG4gICAgICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBObyBsaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiYCk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlYnVnKGBMaXN0ZW5lcnMgZm91bmQgZm9yIGdsb2JhbCBldmVudCBcIiR7ZXZlbnROYW1lfVwiOiAke2xpc3RlbmVycy5qb2luKCcsICcpfWApO1xuXG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcblxuICAgICAgICBsaXN0ZW5lcnMuZm9yRWFjaCgobmFtZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGx1Z2luID0gdGhpcy5nZXRQbHVnaW4obmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uaXNGdW5jdGlvbigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc1NpbmdsZXRvbigpICYmIHBsdWdpbi5nZXRJbnN0YW5jZXMoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5pdGlhbGlzZVNpbmdsZXRvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBsaXN0ZW5NZXRob2QgPSBwbHVnaW4uY2FsbE1ldGhvZCgnbGlzdGVucycpW2V2ZW50TmFtZV07XG5cbiAgICAgICAgICAgIC8vIENhbGwgZXZlbnQgaGFuZGxlciBtZXRob2RzIGZvciBhbGwgcGx1Z2lucywgaWYgdGhleSBoYXZlIGEgbWV0aG9kIHNwZWNpZmllZCBmb3IgdGhlIGV2ZW50LlxuICAgICAgICAgICAgcGx1Z2luLmdldEluc3RhbmNlcygpLmZvckVhY2goKGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gSWYgYSBwbHVnaW4gaGFzIGNhbmNlbGxlZCB0aGUgZXZlbnQsIG5vIGZ1cnRoZXIgcGx1Z2lucyBhcmUgY29uc2lkZXJlZC5cbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbGlzdGVuTWV0aG9kLmFwcGx5KGluc3RhbmNlLCBwYXJhbWV0ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGJ5IFwiJHtuYW1lfVwiIHBsdWdpbi5gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbnN0YW5jZVtsaXN0ZW5NZXRob2RdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgXCIke2xpc3Rlbk1ldGhvZH1cIiBtZXRob2QgaW4gXCIke25hbWV9XCIgcGx1Z2luYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW2xpc3Rlbk1ldGhvZF0oLi4ucGFyYW1ldGVycykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnKGBHbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX1cIiBjYW5jZWxsZWQgYnkgXCIke25hbWV9XCIgcGx1Z2luYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBMaXN0ZW4gbWV0aG9kIGZvciBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGluIFwiJHtuYW1lfVwiIHBsdWdpbiBpcyBub3QgYSBmdW5jdGlvbiBvciBzdHJpbmcuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZpbmQgYWQtaG9jIGxpc3RlbmVycyBmb3IgdGhpcyBldmVudC5cbiAgICAgICAgaWYgKCFjYW5jZWxsZWQgJiYgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXSAmJiB0aGlzLmxpc3RlbmVyc1tldmVudE5hbWVdLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYEZvdW5kICR7dGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGh9IGFkLWhvYyBsaXN0ZW5lcihzKSBmb3IgZ2xvYmFsIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vIElmIGEgbGlzdGVuZXIgaGFzIGNhbmNlbGxlZCB0aGUgZXZlbnQsIG5vIGZ1cnRoZXIgbGlzdGVuZXJzIGFyZSBjb25zaWRlcmVkLlxuICAgICAgICAgICAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsaXN0ZW5lciguLi5wYXJhbWV0ZXJzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlYnVnKGBHbG9iYWwgZXZlbnQgXCIke2V2ZW50TmFtZX0gY2FuY2VsbGVkIGJ5IGFuIGFkLWhvYyBsaXN0ZW5lci5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgZXZlbnQgYnkgYW4gYWQtaG9jIGxpc3RlbmVyLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhY2FuY2VsbGVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENhbGxzIGEgZ2xvYmFsIGV2ZW50IHRvIGFsbCByZWdpc3RlcmVkIHBsdWdpbnMsIGV4cGVjdGluZyBhIFByb21pc2UgdG8gYmUgcmV0dXJuZWQgYnkgYWxsLlxuICAgICAqXG4gICAgICogVGhpcyBjb2xsYXRlcyBhbGwgcGx1Z2lucyByZXNwb25zZXMgaW50byBvbmUgbGFyZ2UgUHJvbWlzZSB0aGF0IGVpdGhlciBleHBlY3RzIGFsbCB0byBiZSByZXNvbHZlZCwgb3Igb25lIHRvIHJlamVjdC5cbiAgICAgKiBJZiBubyBsaXN0ZW5lcnMgYXJlIGZvdW5kLCBhIHJlc29sdmVkIFByb21pc2UgaXMgcmV0dXJuZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXG4gICAgICovXG4gICAgZ2xvYmFsUHJvbWlzZUV2ZW50KGV2ZW50TmFtZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmRlYnVnKGBDYWxsaW5nIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcblxuICAgICAgICAvLyBGaW5kIHBsdWdpbnMgbGlzdGVuaW5nIHRvIHRoaXMgZXZlbnQuXG4gICAgICAgIGNvbnN0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuc1RvRXZlbnQoZXZlbnROYW1lKTtcbiAgICAgICAgaWYgKGxpc3RlbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVidWcoYE5vIGxpc3RlbmVycyBmb3VuZCBmb3IgZ2xvYmFsIHByb21pc2UgZXZlbnQgXCIke2V2ZW50TmFtZX1cImApO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVidWcoYExpc3RlbmVycyBmb3VuZCBmb3IgZ2xvYmFsIHByb21pc2UgZXZlbnQgXCIke2V2ZW50TmFtZX1cIjogJHtsaXN0ZW5lcnMuam9pbignLCAnKX1gKTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuXG4gICAgICAgIGxpc3RlbmVycy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLmdldFBsdWdpbihuYW1lKTtcblxuICAgICAgICAgICAgaWYgKHBsdWdpbi5pc0Z1bmN0aW9uKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGx1Z2luLmlzU2luZ2xldG9uKCkgJiYgcGx1Z2luLmdldEluc3RhbmNlcygpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHBsdWdpbi5pbml0aWFsaXNlU2luZ2xldG9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGxpc3Rlbk1ldGhvZCA9IHBsdWdpbi5jYWxsTWV0aG9kKCdsaXN0ZW5zJylbZXZlbnROYW1lXTtcblxuICAgICAgICAgICAgLy8gQ2FsbCBldmVudCBoYW5kbGVyIG1ldGhvZHMgZm9yIGFsbCBwbHVnaW5zLCBpZiB0aGV5IGhhdmUgYSBtZXRob2Qgc3BlY2lmaWVkIGZvciB0aGUgZXZlbnQuXG4gICAgICAgICAgICBwbHVnaW4uZ2V0SW5zdGFuY2VzKCkuZm9yRWFjaCgoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3Rlbk1ldGhvZCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2VQcm9taXNlID0gbGlzdGVuTWV0aG9kLmFwcGx5KGluc3RhbmNlLCBwYXJhbWV0ZXJzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGluc3RhbmNlUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBFcnJvciB0aHJvd24gaW4gXCIke2V2ZW50TmFtZX1cIiBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ZW5NZXRob2QgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5zdGFuY2VbbGlzdGVuTWV0aG9kXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nIFwiJHtsaXN0ZW5NZXRob2R9XCIgbWV0aG9kIGluIFwiJHtuYW1lfVwiIHBsdWdpbmApO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlUHJvbWlzZSA9IGluc3RhbmNlW2xpc3Rlbk1ldGhvZF0oLi4ucGFyYW1ldGVycyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChpbnN0YW5jZVByb21pc2UpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgRXJyb3IgdGhyb3duIGluIFwiJHtldmVudE5hbWV9XCIgcHJvbWlzZSBldmVudCBieSBcIiR7bmFtZX1cIiBwbHVnaW4uYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGBMaXN0ZW4gbWV0aG9kIGZvciBcIiR7ZXZlbnROYW1lfVwiIGV2ZW50IGluIFwiJHtuYW1lfVwiIHBsdWdpbiBpcyBub3QgYSBmdW5jdGlvbiBvciBzdHJpbmcuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZpbmQgYWQtaG9jIGxpc3RlbmVycyBsaXN0ZW5pbmcgdG8gdGhpcyBldmVudC5cbiAgICAgICAgaWYgKHRoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0gJiYgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlYnVnKGBGb3VuZCAke3RoaXMubGlzdGVuZXJzW2V2ZW50TmFtZV0ubGVuZ3RofSBhZC1ob2MgbGlzdGVuZXIocykgZm9yIGdsb2JhbCBwcm9taXNlIGV2ZW50IFwiJHtldmVudE5hbWV9XCJgKTtcblxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnNbZXZlbnROYW1lXS5mb3JFYWNoKChsaXN0ZW5lcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RlbmVyUHJvbWlzZSA9IGxpc3RlbmVyKC4uLnBhcmFtZXRlcnMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdGVuZXJQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2gobGlzdGVuZXJQcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHRocm93biBpbiBcIiR7ZXZlbnROYW1lfVwiIHByb21pc2UgZXZlbnQgYnkgYW4gYWQtaG9jIGxpc3RlbmVyLmAsXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcm9taXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGEgc3R5bGVkIG1lc3NhZ2UgaW4gdGhlIGNvbnNvbGUuXG4gICAgICpcbiAgICAgKiBJbmNsdWRlcyBwYXJhbWV0ZXJzIGFuZCBhIHN0YWNrIHRyYWNlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgbG9nTWVzc2FnZShjb2xvciwgYm9sZCwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xuICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKFxuICAgICAgICAgICAgJyVjW1Nub3dib2FyZF0nLFxuICAgICAgICAgICAgYGNvbG9yOiAke2NvbG9yfTsgZm9udC13ZWlnaHQ6ICR7KGJvbGQpID8gJ2JvbGQnIDogJ25vcm1hbCd9O2AsXG4gICAgICAgICAgICBtZXNzYWdlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChwYXJhbWV0ZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZChcbiAgICAgICAgICAgICAgICBgJWNQYXJhbWV0ZXJzICVjKCR7cGFyYW1ldGVycy5sZW5ndGh9KWAsXG4gICAgICAgICAgICAgICAgJ2NvbG9yOiByZ2IoNDUsIDE2NywgMTk5KTsgZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgICAgICAgICAnY29sb3I6IHJnYig4OCwgODgsIDg4KTsgZm9udC13ZWlnaHQ6IG5vcm1hbDsnXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcbiAgICAgICAgICAgIHBhcmFtZXRlcnMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgICAgICBpbmRleCArPSAxO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAlYyR7aW5kZXh9OmAsICdjb2xvcjogcmdiKDg4LCA4OCwgODgpOyBmb250LXdlaWdodDogbm9ybWFsOycsIHBhcmFtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwQ29sbGFwc2VkKCclY1RyYWNlJywgJ2NvbG9yOiByZ2IoNDUsIDE2NywgMTk5KTsgZm9udC13ZWlnaHQ6IGJvbGQ7Jyk7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlICovXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGEgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHt2b2lkfVxuICAgICAqL1xuICAgIGxvZyhtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIHRoaXMubG9nTWVzc2FnZSgncmdiKDQ1LCAxNjcsIDE5OSknLCBmYWxzZSwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9nIGEgZGVidWcgbWVzc2FnZS5cbiAgICAgKlxuICAgICAqIFRoZXNlIG1lc3NhZ2VzIGFyZSBvbmx5IHNob3duIHdoZW4gZGVidWdnaW5nIGlzIGVuYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICBkZWJ1ZyhtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKSB7XG4gICAgICAgIGlmICghdGhpcy5kZWJ1Z0VuYWJsZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9nTWVzc2FnZSgncmdiKDQ1LCAxNjcsIDE5OSknLCBmYWxzZSwgbWVzc2FnZSwgLi4ucGFyYW1ldGVycyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9ncyBhbiBlcnJvciBtZXNzYWdlLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3ZvaWR9XG4gICAgICovXG4gICAgZXJyb3IobWVzc2FnZSwgLi4ucGFyYW1ldGVycykge1xuICAgICAgICB0aGlzLmxvZ01lc3NhZ2UoJ3JnYigyMjksIDM1LCAzNSknLCB0cnVlLCBtZXNzYWdlLCAuLi5wYXJhbWV0ZXJzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQmFzZUNvb2tpZSBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBDb29raWUgdXRpbGl0eS5cbiAqXG4gKiBUaGlzIHV0aWxpdHkgaXMgYSB0aGluIHdyYXBwZXIgYXJvdW5kIHRoZSBcImpzLWNvb2tpZVwiIGxpYnJhcnkuXG4gKlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vanMtY29va2llL2pzLWNvb2tpZVxuICogQGNvcHlyaWdodCAyMDIxIFdpbnRlci5cbiAqIEBhdXRob3IgQmVuIFRob21zb24gPGdpdEBhbGZyZWlkby5jb20+XG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZSBleHRlbmRzIFNpbmdsZXRvbiB7XG4gICAgY29uc3RydWN0KCkge1xuICAgICAgICB0aGlzLmRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZXhwaXJlczogbnVsbCxcbiAgICAgICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgICAgIGRvbWFpbjogbnVsbCxcbiAgICAgICAgICAgIHNlY3VyZTogZmFsc2UsXG4gICAgICAgICAgICBzYW1lU2l0ZTogJ0xheCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBkZWZhdWx0IGNvb2tpZSBwYXJhbWV0ZXJzIGZvciBhbGwgc3Vic2VxdWVudCBcInNldFwiIGFuZCBcInJlbW92ZVwiIGNhbGxzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBzZXREZWZhdWx0cyhvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29va2llIGRlZmF1bHRzIG11c3QgYmUgcHJvdmlkZWQgYXMgYW4gb2JqZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBPYmplY3QuZW50cmllcyhvcHRpb25zKS5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gZW50cnk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmRlZmF1bHRzW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVmYXVsdHNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGN1cnJlbnQgZGVmYXVsdCBjb29raWUgcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgICovXG4gICAgZ2V0RGVmYXVsdHMoKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRzID0ge307XG5cbiAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5kZWZhdWx0cykuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICBpZiAodGhpcy5kZWZhdWx0c1trZXldICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGVmYXVsdHNba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGEgY29va2llIGJ5IG5hbWUuXG4gICAgICpcbiAgICAgKiBJZiBgbmFtZWAgaXMgdW5kZWZpbmVkLCByZXR1cm5zIGFsbCBjb29raWVzIGFzIGFuIE9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge09iamVjdHxTdHJpbmd9XG4gICAgICovXG4gICAgZ2V0KG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29uc3QgY29va2llcyA9IEJhc2VDb29raWUuZ2V0KCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKGNvb2tpZXMpLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2Nvb2tpZU5hbWUsIGNvb2tpZVZhbHVlXSA9IGVudHJ5O1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zbm93Ym9hcmQuZ2xvYmFsRXZlbnQoJ2Nvb2tpZS5nZXQnLCBjb29raWVOYW1lLCBjb29raWVWYWx1ZSwgKG5ld1ZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvb2tpZXNbY29va2llTmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gY29va2llcztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB2YWx1ZSA9IEJhc2VDb29raWUuZ2V0KG5hbWUpO1xuXG4gICAgICAgIC8vIEFsbG93IHBsdWdpbnMgdG8gb3ZlcnJpZGUgdGhlIGdvdHRlbiB2YWx1ZVxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnY29va2llLmdldCcsIG5hbWUsIHZhbHVlLCAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSBjb29raWUgYnkgbmFtZS5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc3BlY2lmeSBhZGRpdGlvbmFsIGNvb2tpZSBwYXJhbWV0ZXJzIHRocm91Z2ggdGhlIFwib3B0aW9uc1wiIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7U3RyaW5nfVxuICAgICAqL1xuICAgIHNldChuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgICAgICBsZXQgc2F2ZVZhbHVlID0gdmFsdWU7XG5cbiAgICAgICAgLy8gQWxsb3cgcGx1Z2lucyB0byBvdmVycmlkZSB0aGUgdmFsdWUgdG8gc2F2ZVxuICAgICAgICB0aGlzLnNub3dib2FyZC5nbG9iYWxFdmVudCgnY29va2llLnNldCcsIG5hbWUsIHZhbHVlLCAobmV3VmFsdWUpID0+IHtcbiAgICAgICAgICAgIHNhdmVWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gQmFzZUNvb2tpZS5zZXQobmFtZSwgc2F2ZVZhbHVlLCB7XG4gICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRzKCksXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYSBjb29raWUgYnkgbmFtZS5cbiAgICAgKlxuICAgICAqIFlvdSBjYW4gc3BlY2lmeSB0aGUgYWRkaXRpb25hbCBjb29raWUgcGFyYW1ldGVycyB2aWEgdGhlIFwib3B0aW9uc1wiIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICAgKi9cbiAgICByZW1vdmUobmFtZSwgb3B0aW9ucykge1xuICAgICAgICBCYXNlQ29va2llLnJlbW92ZShuYW1lLCB7XG4gICAgICAgICAgICAuLi50aGlzLmdldERlZmF1bHRzKCksXG4gICAgICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgU2luZ2xldG9uIGZyb20gJy4uL2Fic3RyYWN0cy9TaW5nbGV0b24nO1xuXG4vKipcbiAqIEpTT04gUGFyc2VyIHV0aWxpdHkuXG4gKlxuICogVGhpcyB1dGlsaXR5IHBhcnNlcyBKU09OLWxpa2UgZGF0YSB0aGF0IGRvZXMgbm90IHN0cmljdGx5IG1lZXQgdGhlIEpTT04gc3BlY2lmaWNhdGlvbnMgaW4gb3JkZXIgdG8gc2ltcGxpZnkgZGV2ZWxvcG1lbnQuXG4gKiBJdCBpcyBhIHNhZmUgcmVwbGFjZW1lbnQgZm9yIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXZhbChcIih7XCIgKyB2YWx1ZSArIFwifSlcIikpKSB0aGF0IGRvZXMgbm90IHJlcXVpcmUgdGhlIHVzZSBvZiBldmFsKClcbiAqXG4gKiBAYXV0aG9yIEF5dW1pIEhhbWFzYWtpXG4gKiBAYXV0aG9yIEJlbiBUaG9tc29uIDxnaXRAYWxmcmVpZG8uY29tPlxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vb2N0b2JlcmNtcy9vY3RvYmVyL3B1bGwvNDUyN1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBKc29uUGFyc2VyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIC8vIEFkZCB0byBnbG9iYWwgZnVuY3Rpb24gZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgIHdpbmRvdy53bkpTT04gPSAoanNvbikgPT4gdGhpcy5wYXJzZShqc29uKTtcbiAgICAgICAgd2luZG93Lm9jSlNPTiA9IHdpbmRvdy53bkpTT047XG4gICAgfVxuXG4gICAgcGFyc2Uoc3RyKSB7XG4gICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSB0aGlzLnBhcnNlU3RyaW5nKHN0cik7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGpzb25TdHJpbmcpO1xuICAgIH1cblxuICAgIHBhcnNlU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgIGxldCBzdHIgPSB2YWx1ZS50cmltKCk7XG5cbiAgICAgICAgaWYgKCFzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Jyb2tlbiBKU09OIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCByZXN1bHQgPSAnJztcbiAgICAgICAgbGV0IHR5cGUgPSBudWxsO1xuICAgICAgICBsZXQga2V5ID0gbnVsbDtcbiAgICAgICAgbGV0IGJvZHkgPSAnJztcblxuICAgICAgICAvKlxuICAgICAgICAqIHRoZSBtaXN0YWtlICcsJ1xuICAgICAgICAqL1xuICAgICAgICB3aGlsZSAoc3RyICYmIHN0clswXSA9PT0gJywnKSB7XG4gICAgICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBzdHJpbmdcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0clswXSA9PT0gJ1wiJyB8fCBzdHJbMF0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICBpZiAoc3RyW3N0ci5sZW5ndGggLSAxXSAhPT0gc3RyWzBdKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHN0cmluZyBKU09OIG9iamVjdC4nKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keSA9ICdcIic7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2kgKyAxXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2kgKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gc3RyWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSAnXFxcXFwiJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBzdHJpbmcgSlNPTiBvYmplY3QuJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIGJvb2xlYW5cbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0ciA9PT0gJ3RydWUnIHx8IHN0ciA9PT0gJ2ZhbHNlJykge1xuICAgICAgICAgICAgcmV0dXJuIHN0cjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICogbnVsbFxuICAgICAgICAqL1xuICAgICAgICBpZiAoc3RyID09PSAnbnVsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIG51bWJlclxuICAgICAgICAqL1xuICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIoc3RyKTtcbiAgICAgICAgaWYgKCFOdW1iZXIuaXNOYU4obnVtKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bS50b1N0cmluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBvYmplY3RcbiAgICAgICAgKi9cbiAgICAgICAgaWYgKHN0clswXSA9PT0gJ3snKSB7XG4gICAgICAgICAgICB0eXBlID0gJ25lZWRLZXknO1xuICAgICAgICAgICAga2V5ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc3VsdCA9ICd7JztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0JsYW5rQ2hhcihzdHJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICduZWVkS2V5JyAmJiAoc3RyW2ldID09PSAnXCInIHx8IHN0cltpXSA9PT0gJ1xcJycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMucGFyc2VLZXkoc3RyLCBpICsgMSwgc3RyW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGBcIiR7a2V5fVwiYDtcbiAgICAgICAgICAgICAgICAgICAgaSArPSBrZXkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBpICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYWZ0ZXJLZXknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25lZWRLZXknICYmIHRoaXMuY2FuQmVLZXlIZWFkKHN0cltpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5wYXJzZUtleShzdHIsIGkpO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ1wiJztcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IGtleTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICdcIic7XG4gICAgICAgICAgICAgICAgICAgIGkgKz0ga2V5Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYWZ0ZXJLZXknO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2FmdGVyS2V5JyAmJiBzdHJbaV0gPT09ICc6Jykge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJzonO1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJzonO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJzonKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSB0aGlzLmdldEJvZHkoc3RyLCBpKTtcblxuICAgICAgICAgICAgICAgICAgICBpID0gaSArIGJvZHkub3JpZ2luTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IHRoaXMucGFyc2VTdHJpbmcoYm9keS5ib2R5KTtcblxuICAgICAgICAgICAgICAgICAgICB0eXBlID0gJ2FmdGVyQm9keSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWZ0ZXJCb2R5JyB8fCB0eXBlID09PSAnbmVlZEtleScpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3QgPSBpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc3RyW2xhc3RdID09PSAnLCcgfHwgdGhpcy5pc0JsYW5rQ2hhcihzdHJbbGFzdF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0ICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltsYXN0XSA9PT0gJ30nICYmIGxhc3QgPT09IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJywnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cigwLCByZXN1bHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ30nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAobGFzdCAhPT0gaSAmJiByZXN1bHQgIT09ICd7Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnbmVlZEtleSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gbGFzdCAtIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gb2JqZWN0IG5lYXIgJHtyZXN1bHR9YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKlxuICAgICAgICAqIGFycmF5XG4gICAgICAgICovXG4gICAgICAgIGlmIChzdHJbMF0gPT09ICdbJykge1xuICAgICAgICAgICAgcmVzdWx0ID0gJ1snO1xuICAgICAgICAgICAgdHlwZSA9ICduZWVkQm9keSc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICcgJyB8fCBzdHJbaV0gPT09ICdcXG4nIHx8IHN0cltpXSA9PT0gJ1xcdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ25lZWRCb2R5Jykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnbnVsbCwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXScgJiYgaSA9PT0gc3RyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnLCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyKDAsIHJlc3VsdC5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnXSc7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IHRoaXMuZ2V0Qm9keShzdHIsIGkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGkgPSBpICsgYm9keS5vcmlnaW5MZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gdGhpcy5wYXJzZVN0cmluZyhib2R5LmJvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnYWZ0ZXJCb2R5JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdhZnRlckJvZHknKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9ICcsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnbmVlZEJvZHknO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWFsIHdpdGggbWlzdGFrZSBcIixcIlxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHN0cltpICsgMV0gPT09ICcsJyB8fCB0aGlzLmlzQmxhbmtDaGFyKHN0cltpICsgMV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltpICsgMV0gPT09ICcsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ251bGwsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ10nICYmIGkgPT09IHN0ci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gJ10nO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBhcnJheSBuZWFyICR7cmVzdWx0fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGdldEJvZHkoc3RyLCBwb3MpIHtcbiAgICAgICAgbGV0IGJvZHkgPSAnJztcblxuICAgICAgICAvLyBwYXJzZSBzdHJpbmcgYm9keVxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICdcIicgfHwgc3RyW3Bvc10gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICBib2R5ID0gc3RyW3Bvc107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwb3MgKyAxOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgKz0gc3RyW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSArIDEgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RyW2ldID09PSBzdHJbcG9zXSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltwb3NdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiBib2R5Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIHN0cmluZyBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyc2UgdHJ1ZSAvIGZhbHNlXG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ3QnKSB7XG4gICAgICAgICAgICBpZiAoc3RyLmluZGV4T2YoJ3RydWUnLCBwb3MpID09PSBwb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6ICd0cnVlJy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIGJvb2xlYW4gYm9keSBuZWFyICR7c3RyLnN1YnN0cigwLCBwb3MgKyAxMCl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0cltwb3NdID09PSAnZicpIHtcbiAgICAgICAgICAgIGlmIChzdHIuaW5kZXhPZignZicsIHBvcykgPT09IHBvcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbkxlbmd0aDogJ2ZhbHNlJy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6ICdmYWxzZScsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib29sZWFuIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoMCwgcG9zICsgMTApfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyc2UgbnVsbFxuICAgICAgICBpZiAoc3RyW3Bvc10gPT09ICduJykge1xuICAgICAgICAgICAgaWYgKHN0ci5pbmRleE9mKCdudWxsJywgcG9zKSA9PT0gcG9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiAnbnVsbCcubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBib2R5OiAnbnVsbCcsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBib29sZWFuIGJvZHkgbmVhciAke3N0ci5zdWJzdHIoMCwgcG9zICsgMTApfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyc2UgbnVtYmVyXG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJy0nIHx8IHN0cltwb3NdID09PSAnKycgfHwgc3RyW3Bvc10gPT09ICcuJyB8fCAoc3RyW3Bvc10gPj0gJzAnICYmIHN0cltwb3NdIDw9ICc5JykpIHtcbiAgICAgICAgICAgIGJvZHkgPSAnJztcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBvczsgaSA8IHN0ci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbaV0gPT09ICctJyB8fCBzdHJbaV0gPT09ICcrJyB8fCBzdHJbaV0gPT09ICcuJyB8fCAoc3RyW2ldID49ICcwJyAmJiBzdHJbaV0gPD0gJzknKSkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZ2luTGVuZ3RoOiBib2R5Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OIG51bWJlciBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFyc2Ugb2JqZWN0XG4gICAgICAgIGlmIChzdHJbcG9zXSA9PT0gJ3snIHx8IHN0cltwb3NdID09PSAnWycpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gW1xuICAgICAgICAgICAgICAgIHN0cltwb3NdLFxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGJvZHkgPSBzdHJbcG9zXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBvcyArIDE7IGkgPCBzdHIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBib2R5ICs9IHN0cltpXTtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgKyAxIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSArPSBzdHJbaSArIDFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgKz0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ1wiJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICdcIicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaChzdHJbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFja1tzdGFjay5sZW5ndGggLSAxXSA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSAnXCInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHN0cltpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSAnXCInICYmIHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdICE9PSAnXFwnJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ldID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnB1c2goJ3snKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICd9Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YWNrW3N0YWNrLmxlbmd0aCAtIDFdID09PSAneycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFjay5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiAkeyhzdHJbcG9zXSA9PT0gJ3snID8gJ29iamVjdCcgOiAnYXJyYXknKX0gYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHJbaV0gPT09ICdbJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2sucHVzaCgnWycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0cltpXSA9PT0gJ10nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhY2tbc3RhY2subGVuZ3RoIC0gMV0gPT09ICdbJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YWNrLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEJyb2tlbiBKU09OICR7KHN0cltwb3NdID09PSAneycgPyAnb2JqZWN0JyA6ICdhcnJheScpfSBib2R5IG5lYXIgJHtib2R5fWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghc3RhY2subGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW5MZW5ndGg6IGkgLSBwb3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiAkeyhzdHJbcG9zXSA9PT0gJ3snID8gJ29iamVjdCcgOiAnYXJyYXknKX0gYm9keSBuZWFyICR7Ym9keX1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQnJva2VuIEpTT04gYm9keSBuZWFyICR7c3RyLnN1YnN0cigocG9zIC0gNSA+PSAwKSA/IHBvcyAtIDUgOiAwLCA1MCl9YCk7XG4gICAgfVxuXG4gICAgcGFyc2VLZXkoc3RyLCBwb3MsIHF1b3RlKSB7XG4gICAgICAgIGxldCBrZXkgPSAnJztcblxuICAgICAgICBmb3IgKGxldCBpID0gcG9zOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAocXVvdGUgJiYgcXVvdGUgPT09IHN0cltpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXF1b3RlICYmIChzdHJbaV0gPT09ICcgJyB8fCBzdHJbaV0gPT09ICc6JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBrZXkgKz0gc3RyW2ldO1xuXG4gICAgICAgICAgICBpZiAoc3RyW2ldID09PSAnXFxcXCcgJiYgaSArIDEgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAga2V5ICs9IHN0cltpICsgMV07XG4gICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBCcm9rZW4gSlNPTiBzeW50YXggbmVhciAke2tleX1gKTtcbiAgICB9XG5cbiAgICBjYW5CZUtleUhlYWQoY2gpIHtcbiAgICAgICAgaWYgKGNoWzBdID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGNoWzBdID49ICdhJyAmJiBjaFswXSA8PSAneicpIHx8IChjaFswXSA+PSAnQScgJiYgY2hbMF0gPD0gJ1onKSB8fCBjaFswXSA9PT0gJ18nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hbMF0gPj0gJzAnICYmIGNoWzBdIDw9ICc5Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoWzBdID09PSAnJCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaC5jaGFyQ29kZUF0KDApID4gMjU1KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc0JsYW5rQ2hhcihjaCkge1xuICAgICAgICByZXR1cm4gY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHQnO1xuICAgIH1cbn1cbiIsImltcG9ydCBTaW5nbGV0b24gZnJvbSAnLi4vYWJzdHJhY3RzL1NpbmdsZXRvbic7XG5cbi8qKlxuICogU2FuaXRpemVyIHV0aWxpdHkuXG4gKlxuICogQ2xpZW50LXNpZGUgSFRNTCBzYW5pdGl6ZXIgZGVzaWduZWQgbW9zdGx5IHRvIHByZXZlbnQgc2VsZi1YU1MgYXR0YWNrcy5cbiAqIFRoZSBzYW5pdGl6ZXIgdXRpbGl0eSB3aWxsIHN0cmlwIGFsbCBhdHRyaWJ1dGVzIHRoYXQgc3RhcnQgd2l0aCBgb25gICh1c3VhbGx5IEpTIGV2ZW50IGhhbmRsZXJzIGFzIGF0dHJpYnV0ZXMsIGkuZS4gYG9ubG9hZGAgb3IgYG9uZXJyb3JgKSBvciBjb250YWluIHRoZSBgamF2YXNjcmlwdDpgIHBzZXVkbyBwcm90b2NvbCBpbiB0aGVpciB2YWx1ZXMuXG4gKlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2FuaXRpemVyIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIC8vIEFkZCB0byBnbG9iYWwgZnVuY3Rpb24gZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5XG4gICAgICAgIHdpbmRvdy53blNhbml0aXplID0gKGh0bWwpID0+IHRoaXMuc2FuaXRpemUoaHRtbCk7XG4gICAgICAgIHdpbmRvdy5vY1Nhbml0aXplID0gd2luZG93LnduU2FuaXRpemU7XG4gICAgfVxuXG4gICAgc2FuaXRpemUoaHRtbCwgYm9keU9ubHkpIHtcbiAgICAgICAgY29uc3QgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICBjb25zdCBkb20gPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsICd0ZXh0L2h0bWwnKTtcbiAgICAgICAgY29uc3QgcmV0dXJuQm9keU9ubHkgPSAoYm9keU9ubHkgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgYm9keU9ubHkgPT09ICdib29sZWFuJylcbiAgICAgICAgICAgID8gYm9keU9ubHlcbiAgICAgICAgICAgIDogdHJ1ZTtcblxuICAgICAgICB0aGlzLnNhbml0aXplTm9kZShkb20uZ2V0Um9vdE5vZGUoKSk7XG5cbiAgICAgICAgcmV0dXJuIChyZXR1cm5Cb2R5T25seSkgPyBkb20uYm9keS5pbm5lckhUTUwgOiBkb20uaW5uZXJIVE1MO1xuICAgIH1cblxuICAgIHNhbml0aXplTm9kZShub2RlKSB7XG4gICAgICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICdTQ1JJUFQnKSB7XG4gICAgICAgICAgICBub2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmltQXR0cmlidXRlcyhub2RlKTtcblxuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IEFycmF5LmZyb20obm9kZS5jaGlsZHJlbik7XG5cbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2FuaXRpemVOb2RlKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJpbUF0dHJpYnV0ZXMobm9kZSkge1xuICAgICAgICBpZiAoIW5vZGUuYXR0cmlidXRlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJOYW1lID0gbm9kZS5hdHRyaWJ1dGVzLml0ZW0oaSkubmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJWYWx1ZSA9IG5vZGUuYXR0cmlidXRlcy5pdGVtKGkpLnZhbHVlO1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgKiByZW1vdmUgYXR0cmlidXRlcyB3aGVyZSB0aGUgbmFtZXMgc3RhcnQgd2l0aCBcIm9uXCIgKGZvciBleGFtcGxlOiBvbmxvYWQsIG9uZXJyb3IuLi4pXG4gICAgICAgICAgICAqIHJlbW92ZSBhdHRyaWJ1dGVzIHdoZXJlIHRoZSB2YWx1ZSBzdGFydHMgd2l0aCB0aGUgXCJqYXZhc2NyaXB0OlwiIHBzZXVkbyBwcm90b2NvbCAoZm9yIGV4YW1wbGUgaHJlZj1cImphdmFzY3JpcHQ6YWxlcnQoMSlcIilcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgICAgIGlmIChhdHRyTmFtZS5pbmRleE9mKCdvbicpID09PSAwIHx8IGF0dHJWYWx1ZS5pbmRleE9mKCdqYXZhc2NyaXB0OicpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IFNpbmdsZXRvbiBmcm9tICcuLi9hYnN0cmFjdHMvU2luZ2xldG9uJztcblxuLyoqXG4gKiBVUkwgdXRpbGl0eS5cbiAqXG4gKiBUaGlzIHV0aWxpdHkgcHJvdmlkZXMgVVJMIGZ1bmN0aW9ucy5cbiAqXG4gKiBAY29weXJpZ2h0IDIwMjIgV2ludGVyLlxuICogQGF1dGhvciBCZW4gVGhvbXNvbiA8Z2l0QGFsZnJlaWRvLmNvbT5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXJsIGV4dGVuZHMgU2luZ2xldG9uIHtcbiAgICBjb25zdHJ1Y3QoKSB7XG4gICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5mb3VuZEFzc2V0VXJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5iYXNlVXJsKCk7XG4gICAgICAgIHRoaXMuYXNzZXRVcmwoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgVVJMIGJhc2VkIG9uIGEgcmVsYXRpdmUgcGF0aC5cbiAgICAgKlxuICAgICAqIElmIGFuIGFic29sdXRlIFVSTCBpcyBwcm92aWRlZCwgaXQgd2lsbCBiZSByZXR1cm5lZCB1bmNoYW5nZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICB0byh1cmwpIHtcbiAgICAgICAgY29uc3QgdXJsUmVnZXggPSAvXig/OlteOl0rOlxcL1xcLylbLWEtejAtOUA6JS5fK34jPV17MSwyNTZ9XFxiKFstYS16MC05KClAOiVfKy5+Iz8mLy89XSopL2k7XG5cbiAgICAgICAgaWYgKHVybC5tYXRjaCh1cmxSZWdleCkpIHtcbiAgICAgICAgICAgIHJldHVybiB1cmw7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0aGVVcmwgPSB1cmwucmVwbGFjZSgvXlxcLysvLCAnJyk7XG5cbiAgICAgICAgcmV0dXJuIGAke3RoaXMuYmFzZVVybCgpfSR7dGhlVXJsfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbiBBc3NldCBVUkwgYmFzZWQgb24gYSByZWxhdGl2ZSBwYXRoLlxuICAgICAqXG4gICAgICogSWYgYW4gYWJzb2x1dGUgVVJMIGlzIHByb3ZpZGVkLCBpdCB3aWxsIGJlIHJldHVybmVkIHVuY2hhbmdlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGFzc2V0KHVybCkge1xuICAgICAgICBjb25zdCB1cmxSZWdleCA9IC9eKD86W146XSs6XFwvXFwvKVstYS16MC05QDolLl8rfiM9XXsxLDI1Nn1cXGIoWy1hLXowLTkoKUA6JV8rLn4jPyYvLz1dKikvaTtcblxuICAgICAgICBpZiAodXJsLm1hdGNoKHVybFJlZ2V4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRoZVVybCA9IHVybC5yZXBsYWNlKC9eXFwvKy8sICcnKTtcblxuICAgICAgICByZXR1cm4gYCR7dGhpcy5hc3NldFVybCgpfSR7dGhlVXJsfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGVscGVyIG1ldGhvZCB0byBnZXQgdGhlIGJhc2UgVVJMIG9mIHRoaXMgaW5zdGFsbC5cbiAgICAgKlxuICAgICAqIFRoaXMgZGV0ZXJtaW5lcyB0aGUgYmFzZSBVUkwgZnJvbSB0aHJlZSBzb3VyY2VzLCBpbiBvcmRlcjpcbiAgICAgKiAgLSBJZiBTbm93Ym9hcmQgaXMgbG9hZGVkIHZpYSB0aGUgYHslIHNub3dib2FyZCAlfWAgdGFnLCBpdCB3aWxsIHJldHJpZXZlIHRoZSBiYXNlIFVSTCB0aGF0XG4gICAgICogaXMgYXV0b21hdGljYWxseSBpbmNsdWRlZCB0aGVyZS5cbiAgICAgKiAgLSBJZiBhIGA8YmFzZT5gIHRhZyBpcyBhdmFpbGFibGUsIGl0IHdpbGwgdXNlIHRoZSBVUkwgc3BlY2lmaWVkIGluIHRoZSBiYXNlIHRhZy5cbiAgICAgKiAgLSBGaW5hbGx5LCBpdCB3aWxsIHRha2UgYSBndWVzcyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uLiBUaGlzIHdpbGwgbGlrZWx5IG5vdCB3b3JrIGZvciBzaXRlc1xuICAgICAqIHRoYXQgcmVzaWRlIGluIHN1YmRpcmVjdG9yaWVzLlxuICAgICAqXG4gICAgICogVGhlIGJhc2UgVVJMIHdpbGwgYWx3YXlzIGNvbnRhaW4gYSB0cmFpbGluZyBiYWNrc2xhc2guXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGJhc2VVcmwoKSB7XG4gICAgICAgIGlmICh0aGlzLmZvdW5kQmFzZVVybCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRCYXNlVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLW1vZHVsZT1cInNub3dib2FyZC1iYXNlXCJdJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gdGhpcy52YWxpZGF0ZUJhc2VVcmwoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W2RhdGEtbW9kdWxlPVwic25vd2JvYXJkLWJhc2VcIl0nKS5kYXRhc2V0LmJhc2VVcmwpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRCYXNlVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Jhc2UnKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5mb3VuZEJhc2VVcmwgPSB0aGlzLnZhbGlkYXRlQmFzZVVybChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdiYXNlJykuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRCYXNlVXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXJsUGFydHMgPSBbXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wsXG4gICAgICAgICAgICAnLy8nLFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3QsXG4gICAgICAgICAgICAnLycsXG4gICAgICAgIF07XG4gICAgICAgIHRoaXMuZm91bmRCYXNlVXJsID0gdXJsUGFydHMuam9pbignJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRCYXNlVXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gZ2V0IHRoZSBhc3NldCBVUkwgb2YgdGhpcyBpbnN0YWxsLlxuICAgICAqXG4gICAgICogVGhpcyBkZXRlcm1pbmVzIHRoZSBiYXNlIFVSTCBmcm9tIHRocmVlIHNvdXJjZXMsIGluIG9yZGVyOlxuICAgICAqICAtIElmIFNub3dib2FyZCBpcyBsb2FkZWQgdmlhIHRoZSBgeyUgc25vd2JvYXJkICV9YCB0YWcsIGl0IHdpbGwgcmV0cmlldmUgdGhlIGFzc2V0IFVSTCB0aGF0XG4gICAgICogaXMgYXV0b21hdGljYWxseSBpbmNsdWRlZCB0aGVyZS5cbiAgICAgKiAgLSBJZiBhIGA8bGluayByZWw9XCJhc3NldF91cmxcIiBocmVmPVwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiPmAgdGFnIGlzIGF2YWlsYWJsZSwgaXQgd2lsbCB1c2UgdGhlIFVSTCBzcGVjaWZpZWQgaW4gdGhlIGxpbmsgdGFnLlxuICAgICAqICAtIEZpbmFsbHksIGl0IHdpbGwgdGFrZSBhIGd1ZXNzIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24uIFRoaXMgd2lsbCBsaWtlbHkgbm90IHdvcmsgZm9yIHNpdGVzXG4gICAgICogdGhhdCByZXNpZGUgaW4gc3ViZGlyZWN0b3JpZXMuXG4gICAgICpcbiAgICAgKiBUaGUgYXNzZXQgVVJMIHdpbGwgYWx3YXlzIGNvbnRhaW4gYSB0cmFpbGluZyBiYWNrc2xhc2guXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGFzc2V0VXJsKCkge1xuICAgICAgICBpZiAodGhpcy5mb3VuZEFzc2V0VXJsICE9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEFzc2V0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLW1vZHVsZT1cInNub3dib2FyZC1iYXNlXCJdJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRBc3NldFVybCA9IHRoaXMudmFsaWRhdGVCYXNlVXJsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NjcmlwdFtkYXRhLW1vZHVsZT1cInNub3dib2FyZC1iYXNlXCJdJykuZGF0YXNldC5hc3NldFVybCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEFzc2V0VXJsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiYXNzZXRfdXJsXCJdJykgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuZm91bmRBc3NldFVybCA9IHRoaXMudmFsaWRhdGVCYXNlVXJsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xpbmtbcmVsPVwiYXNzZXRfdXJsXCJdJykuZ2V0QXR0cmlidXRlKCdocmVmJykpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm91bmRBc3NldFVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHVybFBhcnRzID0gW1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnByb3RvY29sLFxuICAgICAgICAgICAgJy8vJyxcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0LFxuICAgICAgICAgICAgJy8nLFxuICAgICAgICBdO1xuICAgICAgICB0aGlzLmZvdW5kQXNzZXRVcmwgPSB1cmxQYXJ0cy5qb2luKCcnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5mb3VuZEFzc2V0VXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyB0aGUgYmFzZSBVUkwsIGVuc3VyaW5nIGl0IGlzIGEgSFRUUC9IVFRQcyBVUkwuXG4gICAgICpcbiAgICAgKiBJZiB0aGUgU25vd2JvYXJkIHNjcmlwdCBvciA8YmFzZT4gdGFnIG9uIHRoZSBwYWdlIHVzZSBhIGRpZmZlcmVudCB0eXBlIG9mIFVSTCwgdGhpcyB3aWxsIGZhaWwgd2l0aFxuICAgICAqIGFuIGVycm9yLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgdmFsaWRhdGVCYXNlVXJsKHVybCkge1xuICAgICAgICBjb25zdCB1cmxSZWdleCA9IC9eKChbXjovPyNdKyk6KT8oXFwvXFwvKFteLz8jXSopKT8oW14/I10qKShcXD8oW14jXSopKT8oIyguKikpPy9pO1xuICAgICAgICBjb25zdCB1cmxQYXJ0cyA9IHVybFJlZ2V4LmV4ZWModXJsKTtcbiAgICAgICAgY29uc3QgcHJvdG9jb2wgPSB1cmxQYXJ0c1syXTtcbiAgICAgICAgY29uc3QgZG9tYWluID0gdXJsUGFydHNbNF07XG5cbiAgICAgICAgaWYgKHByb3RvY29sICYmIFsnaHR0cCcsICdodHRwcyddLmluZGV4T2YocHJvdG9jb2wudG9Mb3dlckNhc2UoKSkgPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgYmFzZSBVUkwgZGV0ZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRvbWFpbikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGJhc2UgVVJMIGRldGVjdGVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKHVybC5zdWJzdHIoLTEpID09PSAnLycpXG4gICAgICAgICAgICA/IHVybFxuICAgICAgICAgICAgOiBgJHt1cmx9L2A7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNub3dib2FyZCBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL21haW4vU25vd2JvYXJkJztcbmltcG9ydCBQcm94eUhhbmRsZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9tYWluL1Byb3h5SGFuZGxlcic7XG5pbXBvcnQgUmVxdWVzdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2FqYXgvUmVxdWVzdCc7XG5pbXBvcnQgQXR0cmlidXRlUmVxdWVzdCBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2FqYXgvaGFuZGxlcnMvQXR0cmlidXRlUmVxdWVzdCc7XG5pbXBvcnQgQXNzZXRMb2FkZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvQXNzZXRMb2FkZXInO1xuaW1wb3J0IERhdGFDb25maWcgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvRGF0YUNvbmZpZyc7XG5pbXBvcnQgU3R5bGVzaGVldExvYWRlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9TdHlsZXNoZWV0TG9hZGVyJztcbmltcG9ydCBUcmFuc2l0aW9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL1RyYW5zaXRpb24nO1xuaW1wb3J0IEZsYXNoIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0ZsYXNoJztcbmltcG9ydCBGbGFzaExpc3RlbmVyIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0ZsYXNoTGlzdGVuZXInO1xuaW1wb3J0IEZvcm1WYWxpZGF0aW9uIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0Zvcm1WYWxpZGF0aW9uJztcbmltcG9ydCBBdHRhY2hMb2FkaW5nIGZyb20gJy4uLy4uLy4uLy4uLy4uL21vZHVsZXMvc3lzdGVtL2Fzc2V0cy9qcy9zbm93Ym9hcmQvZXh0cmFzL0F0dGFjaExvYWRpbmcnO1xuaW1wb3J0IFN0cmlwZUxvYWRlciBmcm9tICcuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N5c3RlbS9hc3NldHMvanMvc25vd2JvYXJkL2V4dHJhcy9TdHJpcGVMb2FkZXInO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAnLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9zeXN0ZW0vYXNzZXRzL2pzL3Nub3dib2FyZC9leHRyYXMvVHJpZ2dlcic7XG5cbigod2luZG93KSA9PiB7XG4gICAgY29uc3Qgc25vd2JvYXJkID0gbmV3IFByb3h5KFxuICAgICAgICBuZXcgU25vd2JvYXJkKHRydWUsIHRydWUpLFxuICAgICAgICBQcm94eUhhbmRsZXIsXG4gICAgKTtcblxuICAgIC8vIENvdmVyIGFsbCBhbGlhc2VzXG4gICAgd2luZG93LnNub3dib2FyZCA9IHNub3dib2FyZDtcbiAgICB3aW5kb3cuU25vd2JvYXJkID0gc25vd2JvYXJkO1xuICAgIHdpbmRvdy5Tbm93Qm9hcmQgPSBzbm93Ym9hcmQ7XG5cbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCdyZXF1ZXN0JywgUmVxdWVzdCk7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbignYXR0cmlidXRlUmVxdWVzdCcsIEF0dHJpYnV0ZVJlcXVlc3QpO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ2Fzc2V0TG9hZGVyJywgQXNzZXRMb2FkZXIpO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ2RhdGFDb25maWcnLCBEYXRhQ29uZmlnKTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCdleHRyYXNTdHlsZXMnLCBTdHlsZXNoZWV0TG9hZGVyKTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCd0cmFuc2l0aW9uJywgVHJhbnNpdGlvbik7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbignZmxhc2gnLCBGbGFzaCk7XG4gICAgc25vd2JvYXJkLmFkZFBsdWdpbignZmxhc2hMaXN0ZW5lcicsIEZsYXNoTGlzdGVuZXIpO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ2Zvcm1WYWxpZGF0aW9uJywgRm9ybVZhbGlkYXRpb24pO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ2F0dGFjaExvYWRpbmcnLCBBdHRhY2hMb2FkaW5nKTtcbiAgICBzbm93Ym9hcmQuYWRkUGx1Z2luKCdzdHJpcGVMb2FkZXInLCBTdHJpcGVMb2FkZXIpO1xuICAgIHNub3dib2FyZC5hZGRQbHVnaW4oJ3RyaWdnZXInLCBUcmlnZ2VyKTtcblxuICAgIHNub3dib2FyZC5vbigncmVhZHknLCAoKSA9PiB7XG4gICAgICAgIC8vIFNjYW4gZm9yIHRyaWdnZXJzXG4gICAgICAgIEFycmF5XG4gICAgICAgICAgICAuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqJykpXG4gICAgICAgICAgICAuZmlsdGVyKChlbGVtZW50KSA9PiBbLi4uZWxlbWVudC5hdHRyaWJ1dGVzXS5maWx0ZXIoXG4gICAgICAgICAgICAgICAgKHsgbmFtZSB9KSA9PiBuYW1lLnN0YXJ0c1dpdGgoXCJkYXRhLXRyaWdnZXItXCIpKS5sZW5ndGggPiAwXG4gICAgICAgICAgICApLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBzbm93Ym9hcmQudHJpZ2dlcihlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xufSkod2luZG93KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8qISBqcy1jb29raWUgdjMuMC41IHwgTUlUICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbmZ1bmN0aW9uIGFzc2lnbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0XG59XG4vKiBlc2xpbnQtZW5hYmxlIG5vLXZhciAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby12YXIgKi9cbnZhciBkZWZhdWx0Q29udmVydGVyID0ge1xuICByZWFkOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWVbMF0gPT09ICdcIicpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSwgLTEpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvKCVbXFxkQS1GXXsyfSkrL2dpLCBkZWNvZGVVUklDb21wb25lbnQpXG4gIH0sXG4gIHdyaXRlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKFxuICAgICAgLyUoMlszNDZCRl18M1tBQy1GXXw0MHw1W0JERV18NjB8N1tCQ0RdKS9nLFxuICAgICAgZGVjb2RlVVJJQ29tcG9uZW50XG4gICAgKVxuICB9XG59O1xuLyogZXNsaW50LWVuYWJsZSBuby12YXIgKi9cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdmFyICovXG5cbmZ1bmN0aW9uIGluaXQgKGNvbnZlcnRlciwgZGVmYXVsdEF0dHJpYnV0ZXMpIHtcbiAgZnVuY3Rpb24gc2V0IChuYW1lLCB2YWx1ZSwgYXR0cmlidXRlcykge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhdHRyaWJ1dGVzID0gYXNzaWduKHt9LCBkZWZhdWx0QXR0cmlidXRlcywgYXR0cmlidXRlcyk7XG5cbiAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMuZXhwaXJlcyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGF0dHJpYnV0ZXMuZXhwaXJlcyA9IG5ldyBEYXRlKERhdGUubm93KCkgKyBhdHRyaWJ1dGVzLmV4cGlyZXMgKiA4NjRlNSk7XG4gICAgfVxuICAgIGlmIChhdHRyaWJ1dGVzLmV4cGlyZXMpIHtcbiAgICAgIGF0dHJpYnV0ZXMuZXhwaXJlcyA9IGF0dHJpYnV0ZXMuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICAgIH1cblxuICAgIG5hbWUgPSBlbmNvZGVVUklDb21wb25lbnQobmFtZSlcbiAgICAgIC5yZXBsYWNlKC8lKDJbMzQ2Ql18NUV8NjB8N0MpL2csIGRlY29kZVVSSUNvbXBvbmVudClcbiAgICAgIC5yZXBsYWNlKC9bKCldL2csIGVzY2FwZSk7XG5cbiAgICB2YXIgc3RyaW5naWZpZWRBdHRyaWJ1dGVzID0gJyc7XG4gICAgZm9yICh2YXIgYXR0cmlidXRlTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgICBpZiAoIWF0dHJpYnV0ZXNbYXR0cmlidXRlTmFtZV0pIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc3RyaW5naWZpZWRBdHRyaWJ1dGVzICs9ICc7ICcgKyBhdHRyaWJ1dGVOYW1lO1xuXG4gICAgICBpZiAoYXR0cmlidXRlc1thdHRyaWJ1dGVOYW1lXSA9PT0gdHJ1ZSkge1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICAvLyBDb25zaWRlcnMgUkZDIDYyNjUgc2VjdGlvbiA1LjI6XG4gICAgICAvLyAuLi5cbiAgICAgIC8vIDMuICBJZiB0aGUgcmVtYWluaW5nIHVucGFyc2VkLWF0dHJpYnV0ZXMgY29udGFpbnMgYSAleDNCIChcIjtcIilcbiAgICAgIC8vICAgICBjaGFyYWN0ZXI6XG4gICAgICAvLyBDb25zdW1lIHRoZSBjaGFyYWN0ZXJzIG9mIHRoZSB1bnBhcnNlZC1hdHRyaWJ1dGVzIHVwIHRvLFxuICAgICAgLy8gbm90IGluY2x1ZGluZywgdGhlIGZpcnN0ICV4M0IgKFwiO1wiKSBjaGFyYWN0ZXIuXG4gICAgICAvLyAuLi5cbiAgICAgIHN0cmluZ2lmaWVkQXR0cmlidXRlcyArPSAnPScgKyBhdHRyaWJ1dGVzW2F0dHJpYnV0ZU5hbWVdLnNwbGl0KCc7JylbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuIChkb2N1bWVudC5jb29raWUgPVxuICAgICAgbmFtZSArICc9JyArIGNvbnZlcnRlci53cml0ZSh2YWx1ZSwgbmFtZSkgKyBzdHJpbmdpZmllZEF0dHJpYnV0ZXMpXG4gIH1cblxuICBmdW5jdGlvbiBnZXQgKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCAoYXJndW1lbnRzLmxlbmd0aCAmJiAhbmFtZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcbiAgICAvLyBpbiBjYXNlIHRoZXJlIGFyZSBubyBjb29raWVzIGF0IGFsbC5cbiAgICB2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdO1xuICAgIHZhciBqYXIgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYXJ0cyA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLnNsaWNlKDEpLmpvaW4oJz0nKTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIGZvdW5kID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhcnRzWzBdKTtcbiAgICAgICAgamFyW2ZvdW5kXSA9IGNvbnZlcnRlci5yZWFkKHZhbHVlLCBmb3VuZCk7XG5cbiAgICAgICAgaWYgKG5hbWUgPT09IGZvdW5kKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge31cbiAgICB9XG5cbiAgICByZXR1cm4gbmFtZSA/IGphcltuYW1lXSA6IGphclxuICB9XG5cbiAgcmV0dXJuIE9iamVjdC5jcmVhdGUoXG4gICAge1xuICAgICAgc2V0LFxuICAgICAgZ2V0LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAobmFtZSwgYXR0cmlidXRlcykge1xuICAgICAgICBzZXQoXG4gICAgICAgICAgbmFtZSxcbiAgICAgICAgICAnJyxcbiAgICAgICAgICBhc3NpZ24oe30sIGF0dHJpYnV0ZXMsIHtcbiAgICAgICAgICAgIGV4cGlyZXM6IC0xXG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICB3aXRoQXR0cmlidXRlczogZnVuY3Rpb24gKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgcmV0dXJuIGluaXQodGhpcy5jb252ZXJ0ZXIsIGFzc2lnbih7fSwgdGhpcy5hdHRyaWJ1dGVzLCBhdHRyaWJ1dGVzKSlcbiAgICAgIH0sXG4gICAgICB3aXRoQ29udmVydGVyOiBmdW5jdGlvbiAoY29udmVydGVyKSB7XG4gICAgICAgIHJldHVybiBpbml0KGFzc2lnbih7fSwgdGhpcy5jb252ZXJ0ZXIsIGNvbnZlcnRlciksIHRoaXMuYXR0cmlidXRlcylcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGF0dHJpYnV0ZXM6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUoZGVmYXVsdEF0dHJpYnV0ZXMpIH0sXG4gICAgICBjb252ZXJ0ZXI6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUoY29udmVydGVyKSB9XG4gICAgfVxuICApXG59XG5cbnZhciBhcGkgPSBpbml0KGRlZmF1bHRDb252ZXJ0ZXIsIHsgcGF0aDogJy8nIH0pO1xuLyogZXNsaW50LWVuYWJsZSBuby12YXIgKi9cblxuZXhwb3J0IHsgYXBpIGFzIGRlZmF1bHQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIi9hc3NldHMvanMvdGhlbWVcIjogMCxcblx0XCJhc3NldHMvY3NzL3RoZW1lXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3dpbnRlcmNtc193b3Jrc2hvcF90aGVtZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt3aW50ZXJjbXNfd29ya3Nob3BfdGhlbWVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJhc3NldHMvY3NzL3RoZW1lXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vYXNzZXRzL2pzL3NyYy90aGVtZS5qc1wiKSkpXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcImFzc2V0cy9jc3MvdGhlbWVcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9hc3NldHMvY3NzL2Jhc2UuY3NzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiUGx1Z2luQmFzZSIsInNub3dib2FyZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiY29uc3RydWN0IiwiZGVwZW5kZW5jaWVzIiwibGlzdGVucyIsImRlc3RydWN0IiwiZGV0YWNoIiwiZGVzdHJ1Y3RvciIsImRlZmF1bHQiLCJTaW5nbGV0b24iLCJfUGx1Z2luQmFzZSIsIl9jYWxsU3VwZXIiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHMiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9zbGljZWRUb0FycmF5IiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJBcnJheSIsImZyb20iLCJ0ZXN0IiwiaXNBcnJheSIsIm93bktleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyIsImRlZmluZVByb3BlcnRpZXMiLCJfdG9Qcm9wZXJ0eUtleSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsIlJlZmVyZW5jZUVycm9yIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJiaW5kIiwiX3NldFByb3RvdHlwZU9mIiwiUmVxdWVzdCIsImVsZW1lbnQiLCJoYW5kbGVyIiwib3B0aW9ucyIsIl90aGlzIiwiaXNIYW5kbGVyTmFtZSIsIm1hdGNoZWRFbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29uY2F0IiwiZmV0Y2hPcHRpb25zIiwicmVzcG9uc2VEYXRhIiwicmVzcG9uc2VFcnJvciIsImNhbmNlbGxlZCIsImNoZWNrUmVxdWVzdCIsImdsb2JhbEV2ZW50IiwiZXZlbnQiLCJFdmVudCIsImNhbmNlbGFibGUiLCJyZXF1ZXN0IiwiZGlzcGF0Y2hFdmVudCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJkb0NsaWVudFZhbGlkYXRpb24iLCJjb25maXJtIiwiZG9Db25maXJtIiwiY29uZmlybWVkIiwiZG9BamF4IiwicmVzcG9uc2UiLCJwcm9jZXNzVXBkYXRlIiwiWF9XSU5URVJfU1VDQ0VTUyIsInByb2Nlc3NFcnJvciIsInByb2Nlc3NSZXNwb25zZSIsImVycm9yIiwiRWxlbWVudCIsInVuZGVmaW5lZCIsImdldEZldGNoIiwiaGVhZGVycyIsImJvZHkiLCJkYXRhIiwicmVkaXJlY3QiLCJtb2RlIiwiZmV0Y2giLCJ1cmwiLCJicm93c2VyVmFsaWRhdGUiLCJmb3JtIiwiY2hlY2tWYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiX3RoaXMyIiwiYWpheFByb21pc2UiLCJyZWplY3QiLCJvayIsInN0YXR1cyIsImhhcyIsImdldCIsImluY2x1ZGVzIiwianNvbiIsIm1lc3NhZ2UiLCJleGNlcHRpb24iLCJyZW5kZXJFcnJvciIsImZpbGUiLCJsaW5lIiwidHJhY2UiLCJ0ZXh0IiwicmVzcG9uc2VUZXh0IiwiWF9XSU5URVJfUkVTUE9OU0VfQ09ERSIsInByb21pc2UiLCJfdGhpczMiLCJiZWZvcmVVcGRhdGUiLCJwYXJ0aWFscyIsImVudHJpZXMiLCJlbnRyeSIsIl9lbnRyeSIsInN1YnN0ciIsIlhfV0lOVEVSX0FTU0VUUyIsInByb2Nlc3NBc3NldHMiLCJwcm9taXNlcyIsImdsb2JhbFByb21pc2VFdmVudCIsIl9jYWxsZWUiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZG9VcGRhdGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJfdGhpczQiLCJhZmZlY3RlZCIsIl9lbnRyeTIiLCJwYXJ0aWFsIiwiY29udGVudCIsInNlbGVjdG9yIiwidXBkYXRlIiwiZWxlbWVudHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwic3VjY2VzcyIsImZsYXNoIiwiWF9XSU5URVJfRkxBU0hfTUVTU0FHRVMiLCJwcm9jZXNzRmxhc2hNZXNzYWdlcyIsIlhfV0lOVEVSX1JFRElSRUNUIiwicHJvY2Vzc1JlZGlyZWN0IiwicHJvY2Vzc0Vycm9yTWVzc2FnZSIsInNraXBFcnJvciIsIlhfV0lOVEVSX0VSUk9SX0ZJRUxEUyIsInByb2Nlc3NWYWxpZGF0aW9uRXJyb3JzIiwiWF9XSU5URVJfRVJST1JfTUVTU0FHRSIsIl90aGlzNSIsImhhbmRsZVJlZGlyZWN0UmVzcG9uc2UiLCJhZGRFdmVudExpc3RlbmVyIiwiY3JlYXRlRXZlbnQiLCJldmVudE5hbWUiLCJvbmNlIiwibG9jYXRpb24iLCJhc3NpZ24iLCJoYW5kbGVFcnJvck1lc3NhZ2UiLCJhbGVydCIsIm1lc3NhZ2VzIiwiaGFuZGxlRmxhc2hNZXNzYWdlcyIsImZpZWxkcyIsImhhbmRsZVZhbGlkYXRpb25FcnJvcnMiLCJhc3NldHMiLCJfZG9Db25maXJtIiwiX2NhbGxlZTIiLCJmdWxmaWxsZWQiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJoYW5kbGVDb25maXJtTWVzc2FnZSIsImxpc3RlbnNUb0V2ZW50IiwidDAiLCJ0YWdOYW1lIiwiY2xvc2VzdCIsImV4dHJhY3RQYXJ0aWFscyIsInhzcmZUb2tlbiIsImxvYWRpbmciLCJocmVmIiwiZmlsZXMiLCJGb3JtRGF0YSIsImRlYnVnIiwiY29va2llIiwiZm9ybURhdGEiLCJfZW50cnkzIiwiYXBwZW5kIiwiam9pbiIsIkF0dHJpYnV0ZVJlcXVlc3QiLCJfU2luZ2xldG9uIiwicmVhZHkiLCJhamF4U2V0dXAiLCJhdHRhY2hIYW5kbGVycyIsImRpc2FibGVEZWZhdWx0Rm9ybVZhbGlkYXRpb24iLCJkZXRhY2hIYW5kbGVycyIsIl9nZXQiLCJjaGFuZ2VIYW5kbGVyIiwiY2xpY2tIYW5kbGVyIiwia2V5RG93bkhhbmRsZXIiLCJzdWJtaXRIYW5kbGVyIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRhcmdldCIsIm1hdGNoZXMiLCJwcm9jZXNzUmVxdWVzdE9uRWxlbWVudCIsImN1cnJlbnRFbGVtZW50IiwicGFyZW50RWxlbWVudCIsInByZXZlbnREZWZhdWx0IiwidmFsaWRUeXBlcyIsImluZGV4T2YiLCJnZXRBdHRyaWJ1dGUiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJ0cmFja0lucHV0IiwiZGF0YXNldCIsInJlcXVlc3RDb25maXJtIiwicmVxdWVzdFJlZGlyZWN0IiwicmVxdWVzdExvYWRpbmciLCJyZXF1ZXN0Rm9ybSIsInJlcXVlc3RVcmwiLCJwYXJzZURhdGEiLCJyZXF1ZXN0VXBkYXRlIiwicmVxdWVzdERhdGEiLCJvbkFqYXhTZXR1cCIsImZpZWxkTmFtZSIsImdldFBhcmVudFJlcXVlc3REYXRhIiwiZWxlbWVudERhdGEiLCJqc29ucGFyc2VyIiwicGFyc2UiLCJsYXN0VmFsdWUiLCJpbnRlcnZhbCIsInJlc2V0VHJhY2tJbnB1dFRpbWVyIiwiaW5wdXRUaW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9uIiwiRiIsIkFzc2V0TG9hZGVyIiwiYWpheExvYWRBc3NldHMiLCJfbG9hZCIsIl9pdGVyYXRvciIsIl9zdGVwIiwic2NyaXB0IiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsInN0eWxlIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImltYWdlIiwianMiLCJsb2FkU2NyaXB0IiwidDEiLCJjc3MiLCJsb2FkU3R5bGUiLCJ0MiIsInQzIiwiaW1nIiwibG9hZEltYWdlIiwidDQiLCJ0NSIsImxvYWQiLCJfeCIsImFzc2V0IiwibG9hZGVkIiwiZG9tU2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsImRvbUNzcyIsImhlYWQiLCJJbWFnZSIsInNyYyIsIkF0dGFjaExvYWRpbmciLCJhamF4U3RhcnQiLCJhamF4RG9uZSIsImxvYWRFbGVtZW50cyIsImNsYXNzTGlzdCIsImFkZCIsImdldExvYWRpbmdDbGFzcyIsImF0dGFjaExvYWRpbmciLCJyZW1vdmUiLCJEYXRhQ29uZmlnIiwiaW5zdGFuY2UiLCJsb2NhbENvbmZpZyIsIkhUTUxFbGVtZW50IiwiaW5zdGFuY2VDb25maWciLCJhY2NlcHRlZENvbmZpZ3MiLCJyZWZyZXNoIiwiY29uZmlnIiwic2V0IiwicGVyc2lzdCIsImdldEFjY2VwdGVkQ29uZmlncyIsInByb2Nlc3NDb25maWciLCJhY2NlcHRBbGxEYXRhQ29uZmlncyIsImRlZmF1bHRzIiwiZ2V0RGVmYXVsdHMiLCJjb2VyY2VWYWx1ZSIsInN0cmluZ1ZhbHVlIiwic3RhcnRzV2l0aCIsImJhc2U2NHN0ciIsInJlcGxhY2UiLCJkZWNvZGVkIiwiYXRvYiIsInRvTG93ZXJDYXNlIiwianNvblBhcnNlciIsIkZsYXNoIiwiZHVyYXRpb24iLCJjbGVhciIsInRpbWVyIiwiZmxhc2hUaW1lciIsInJlbW92ZUF0dHJpYnV0ZSIsInN0b3BUaW1lciIsInN0YXJ0VGltZXIiLCJhcHBlbmRDaGlsZCIsInRyYW5zaXRpb24iLCJ0aW1lclRyYW5zIiwiY2FuY2VsIiwiRmxhc2hMaXN0ZW5lciIsImFqYXhFcnJvck1lc3NhZ2UiLCJhamF4Rmxhc2hNZXNzYWdlcyIsImZsYXNoVHlwZSIsImZsYXNoRHVyYXRpb24iLCJjc3NDbGFzcyIsIkZvcm1WYWxpZGF0aW9uIiwiZXJyb3JCYWdzIiwiYWpheFZhbGlkYXRpb25FcnJvcnMiLCJjb2xsZWN0RXJyb3JCYWdzIiwiZG9WYWxpZGF0aW9uIiwiaW52YWxpZEZpZWxkcyIsInJlcXVlc3RWYWxpZGF0ZSIsImVycm9yQmFnIiwic2hvd0Vycm9yQmFnIiwiY2xlYXJWYWxpZGF0aW9uIiwiaGlkZUVycm9yQmFnIiwicm9vdE5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJtZXNzYWdlTGlzdEVsZW1lbnQiLCJwbGFjZWhvbGRlciIsImNyZWF0ZUNvbW1lbnQiLCJlcnJvckJhZ0RhdGEiLCJ2YWxpZGF0ZUZvciIsInNwbGl0IiwiY2xvbmVOb2RlIiwibWVzc2FnZUxpc3RBbmNob3IiLCJjdXN0b21NZXNzYWdlIiwidGV4dENvbnRlbnQiLCJjaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkIiwiaXNDb25uZWN0ZWQiLCJlcnJvckJhZ1ZhbGlkYXRlc0ZpZWxkIiwiZmlyc3RGaWVsZCIsImZpZWxkIiwic2hpZnQiLCJfaW52YWxpZEZpZWxkcyRmaXJzdEYiLCJlcnJvcnMiLCJtZXNzYWdlRWxlbWVudCIsInZhbGlkYXRpb25NZXNzYWdlIiwiYWZ0ZXIiLCJfaW52YWxpZEZpZWxkcyRPYmplY3QiLCJTdHJpcGVMb2FkZXIiLCJjb3VudGVyIiwiY3JlYXRlU3RyaXBlIiwic3RyaXBlIiwic2hvdyIsImhpZGUiLCJpbmRpY2F0b3IiLCJzdHJpcGVMb2FkZWQiLCJuZXdTdHJpcGUiLCJmb3JjZSIsIlN0eWxlc2hlZXRMb2FkZXIiLCJzdHlsZXNMb2FkZWQiLCJlbmRzV2l0aCIsInN0eWxlc2hlZXQiLCJUcmFuc2l0aW9uIiwiY2FsbGJhY2siLCJ0cmFpbFRvIiwicGFyc2VEdXJhdGlvbiIsImRvVHJhbnNpdGlvbiIsImV2ZW50Q2xhc3NlcyIsIl9sZW4iLCJhcmdzIiwiX2tleSIsImFjdGl2ZSIsIm91dCIsInJldHVybkNsYXNzZXMiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJyZXNldENsYXNzZXMiLCJldmVudENsYXNzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm9uVHJhbnNpdGlvbkVuZCIsInBhcnNlZCIsImV4ZWMiLCJhbW91bnQiLCJ1bml0IiwiTWF0aCIsImZsb29yIiwiVHJpZ2dlciIsInRyaWdnZXJzIiwiTWFwIiwiZXZlbnRzIiwiY29ubmVjdG9ycyIsInBhcnNlVHJpZ2dlcnMiLCJzaXplIiwicmVzZXRFdmVudHMiLCJjcmVhdGVUcmlnZ2VyRXZlbnRzIiwicnVuRXZlbnRzIiwiZGFzaFN0eWxlIiwibWF0Y2giLCJ0cmlnZ2VyUGFydHMiLCJ0cmlnZ2VyTmFtZSIsInRyaWdnZXJUeXBlIiwiX3RyaWdnZXJQYXJ0cyIsInRyaWdnZXIiLCJnZXRTZWxlY3RhYmxlRWxlbWVudHMiLCJoYXNWYWxpZENvbmRpdGlvbnMiLCJoYXNWYWxpZEFjdGlvbnMiLCJwYXJzZUNvbW1hbmQiLCJjb21tYW5kIiwiYWxsb3dNdWx0aXBsZSIsInRyaW0iLCJzcGxpdFZhbHVlcyIsInF1b3RlZCIsIm1hcCIsInNwbGl0VmFsdWUiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJwYXJhbWV0ZXJzIiwic3BsaXRDb21tYW5kcyIsImNvbW1hbmRzIiwic3BsaXRDb21tYW5kIiwiX2NvbW1hbmQkc3BsaXQiLCJfY29tbWFuZCRzcGxpdDIiLCJldmVyeSIsImNvbmRpdGlvbiIsImFjdGlvbiIsImNyZWF0ZVZhbHVlQ29uZGl0aW9uIiwiY3JlYXRlRW1wdHlDb25kaXRpb24iLCJjcmVhdGVDaGVja2VkQ29uZGl0aW9uIiwiY3JlYXRlRm9jdXNlZENvbmRpdGlvbiIsInJlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudCIsIlNldCIsInByaW9yaXR5IiwiZXhlY3V0ZUFjdGlvbnMiLCJfcmVmIiwiZWxlbWVudEV2ZW50Iiwic29ydCIsImIiLCJhbGwiLCJzdXBwb3J0ZWRFbGVtZW50cyIsImVsZW1lbnRWYWx1ZXMiLCJjaGVja2VkIiwic29tZSIsIl90aGlzNiIsIl90aGlzNyIsImF0TGVhc3QiLCJhdE1vc3QiLCJhdExlYXN0Q291bnQiLCJhdE1vc3RDb3VudCIsIl90aGlzOCIsImFjdGl2ZUVsZW1lbnQiLCJlbGVtZW50Q29ubmVjdG9ycyIsImNvbm5lY3RvciIsImNvbmRpdGlvbk1ldCIsIl90aGlzOSIsImFjdGlvblNob3ciLCJhY3Rpb25FbmFibGUiLCJhY3Rpb25WYWx1ZSIsImFjdGlvbkNsYXNzIiwiX3RoaXMxMCIsImRpc3BsYXkiLCJvcmlnaW5hbERpc3BsYXkiLCJhZnRlckFjdGlvbiIsImVuYWJsZSIsIl90aGlzMTEiLCJkaXNhYmxlZCIsIl90aGlzMTIiLCJ1bm1ldFZhbHVlIiwibmV3VmFsdWUiLCJfdGhpczEzIiwidW5tZXRDc3NDbGFzcyIsInByb3AiLCJyZWNlaXZlciIsInByb3BMb3dlciIsImhhc1BsdWdpbiIsIl9SZWZsZWN0JGdldCRwcm9wTG93ZSIsImdldEluc3RhbmNlIiwiSW5uZXJQcm94eUhhbmRsZXIiLCJQbHVnaW5Mb2FkZXIiLCJQcm94eSIsImZyZWV6ZSIsImluc3RhbmNlcyIsInNpbmdsZXRvbiIsImluaXRpYWxpc2VkIiwic2VhbCIsIm1vY2tzIiwib3JpZ2luYWxGdW5jdGlvbnMiLCJoYXNNZXRob2QiLCJtZXRob2ROYW1lIiwiaXNGdW5jdGlvbiIsImNhbGxNZXRob2QiLCJfbGVuMiIsIl9rZXkyIiwiZGVwZW5kZW5jaWVzRnVsZmlsbGVkIiwidW5tZXQiLCJnZXREZXBlbmRlbmNpZXMiLCJpdGVtIiwiZ2V0UGx1Z2luTmFtZXMiLCJpc1NpbmdsZXRvbiIsImluaXRpYWxpc2VTaW5nbGV0b24iLCJfbGVuMyIsInBhcmFtcyIsIl9rZXkzIiwiX2VudHJ5NCIsIl9sZW40IiwiX2tleTQiLCJuZXdJbnN0YW5jZSIsIl9jb25zdHJ1Y3QiLCJzcGxpY2UiLCJnZXRJbnN0YW5jZXMiLCJpc0luaXRpYWxpc2VkIiwiX2xlbjUiLCJfa2V5NSIsInBsdWdpbiIsIm1vY2siLCJfbGVuNiIsIl9rZXk2IiwidW5tb2NrIiwiQ29va2llIiwiSnNvblBhcnNlciIsIlNhbml0aXplciIsIlVybCIsIlNub3dib2FyZCIsImF1dG9TaW5nbGV0b25zIiwiZGVidWdFbmFibGVkIiwiYXV0b0luaXRTaW5nbGV0b25zIiwicGx1Z2lucyIsImxpc3RlbmVycyIsImZvdW5kQmFzZVVybCIsInJlYWRpbmVzcyIsImRvbSIsImF0dGFjaEFic3RyYWN0cyIsImxvYWRVdGlsaXRpZXMiLCJpbml0aWFsaXNlIiwiYWRkUGx1Z2luIiwiaW5pdGlhbGlzZVNpbmdsZXRvbnMiLCJsb3dlck5hbWUiLCJnZXRQbHVnaW5zIiwicmVhZHlNZXRob2QiLCJyZW1vdmVQbHVnaW4iLCJnZXRQbHVnaW4iLCJvbiIsIm9mZiIsImluZGV4IiwibGlzdGVuTWV0aG9kIiwicmVzdWx0IiwibGlzdGVuZXIiLCJpbnN0YW5jZVByb21pc2UiLCJsaXN0ZW5lclByb21pc2UiLCJsb2dNZXNzYWdlIiwiY29sb3IiLCJib2xkIiwiY29uc29sZSIsImdyb3VwQ29sbGFwc2VkIiwicGFyYW0iLCJsb2ciLCJncm91cEVuZCIsIkJhc2VDb29raWUiLCJleHBpcmVzIiwicGF0aCIsImRvbWFpbiIsInNlY3VyZSIsInNhbWVTaXRlIiwic2V0RGVmYXVsdHMiLCJjb29raWVzIiwiY29va2llTmFtZSIsImNvb2tpZVZhbHVlIiwic2F2ZVZhbHVlIiwid25KU09OIiwib2NKU09OIiwic3RyIiwianNvblN0cmluZyIsInBhcnNlU3RyaW5nIiwiSlNPTiIsIm51bSIsImlzQmxhbmtDaGFyIiwicGFyc2VLZXkiLCJjYW5CZUtleUhlYWQiLCJnZXRCb2R5Iiwib3JpZ2luTGVuZ3RoIiwibGFzdCIsInBvcyIsInN0YWNrIiwicXVvdGUiLCJjaCIsImNoYXJDb2RlQXQiLCJ3blNhbml0aXplIiwiaHRtbCIsInNhbml0aXplIiwib2NTYW5pdGl6ZSIsImJvZHlPbmx5IiwicGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicmV0dXJuQm9keU9ubHkiLCJzYW5pdGl6ZU5vZGUiLCJnZXRSb290Tm9kZSIsIm5vZGUiLCJ0cmltQXR0cmlidXRlcyIsImNoaWxkcmVuIiwiY2hpbGQiLCJhdHRyaWJ1dGVzIiwiYXR0ck5hbWUiLCJhdHRyVmFsdWUiLCJmb3VuZEFzc2V0VXJsIiwiYmFzZVVybCIsImFzc2V0VXJsIiwidG8iLCJ1cmxSZWdleCIsInRoZVVybCIsInZhbGlkYXRlQmFzZVVybCIsInVybFBhcnRzIiwicHJvdG9jb2wiLCJob3N0IiwiUHJveHlIYW5kbGVyIiwiU25vd0JvYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==