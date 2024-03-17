"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _global = require("global");
var _escapeHtml = _interopRequireDefault(require("escape-html"));
var _KnobStore = _interopRequireDefault(require("./KnobStore"));
var _shared = require("./shared");
var _converters = require("./converters");
var _excluded = ["value"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var navigator = _global.navigator || _global.global.navigator;
var knobValuesFromUrl = {};
// getQueryParams is now a part of the manager storybookApi. We don't have a way to access that here.
// Object.entries(getQueryParams()).reduce(
//   (acc, [k, v]) => {
//     if (k.includes('knob-')) {
//       return { ...acc, [k.replace('knob-', '')]: v };
//     }
//     return acc;
//   },
//   {}
// );

// This is used by _mayCallChannel to determine how long to wait to before triggering a panel update
var PANEL_UPDATE_INTERVAL = 400;
function escapeStrings(obj) {
  if (typeof obj === 'string') {
    return (0, _escapeHtml["default"])(obj);
  }
  if (obj == null || _typeof(obj) !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    var newArray = obj.map(escapeStrings);
    var didChange = newArray.some(function (newValue, key) {
      return newValue !== obj[key];
    });
    return didChange ? newArray : obj;
  }
  return Object.entries(obj).reduce(function (acc, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      key = _ref2[0],
      oldValue = _ref2[1];
    var newValue = escapeStrings(oldValue);
    return newValue === oldValue ? acc : _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, key, newValue));
  }, obj);
}
var KnobManager = /*#__PURE__*/function () {
  function KnobManager() {
    _classCallCheck(this, KnobManager);
    _defineProperty(this, "knobStore", new _KnobStore["default"]());
    _defineProperty(this, "options", {});
    _defineProperty(this, "calling", false);
  }
  _createClass(KnobManager, [{
    key: "setChannel",
    value: function setChannel(channel) {
      this.channel = channel;
    }
  }, {
    key: "setOptions",
    value: function setOptions(options) {
      this.options = options;
    }
  }, {
    key: "getKnobValue",
    value: function getKnobValue(_ref3) {
      var value = _ref3.value;
      return this.options.escapeHTML ? escapeStrings(value) : value;
    }
  }, {
    key: "knob",
    value: function knob(name, options) {
      this._mayCallChannel();
      var knobName = options.groupId ? "".concat(name, "_").concat(options.groupId) : name;
      var knobStore = this.knobStore;
      var existingKnob = knobStore.get(knobName);

      // We need to return the value set by the knob editor via this.
      // Normally the knobs are reset and so re-use is safe as long as the types match
      // when in storyshots, though the change event isn't called and so the knobs aren't reset, making this code fail
      // so always create a new knob when in storyshots
      if (existingKnob && options.type === existingKnob.type && navigator && (
      // userAgent is not set in react-native
      !navigator.userAgent || !navigator.userAgent.includes('jsdom'))) {
        var value = options.value,
          restOptions = _objectWithoutProperties(options, _excluded);
        knobStore.update(knobName, restOptions);
        return this.getKnobValue(existingKnob);
      }
      var knobInfo = _objectSpread(_objectSpread({}, options), {}, {
        name: knobName,
        label: name
      });
      if (knobValuesFromUrl[knobName]) {
        var _value = _converters.deserializers[options.type](knobValuesFromUrl[knobName]);
        knobInfo.defaultValue = _value;
        knobInfo.value = _value;
        delete knobValuesFromUrl[knobName];
      } else {
        knobInfo.defaultValue = options.value;
      }
      knobStore.set(knobName, knobInfo);
      return this.getKnobValue(knobStore.get(knobName));
    }
  }, {
    key: "_mayCallChannel",
    value: function _mayCallChannel() {
      var _this = this;
      // Re rendering of the story may cause changes to the knobStore. Some new knobs maybe added and
      // Some knobs may go unused. So we need to update the panel accordingly. For example remove the
      // unused knobs from the panel. This function sends the `setKnobs` message to the channel
      // triggering a panel re-render.

      if (!this.channel) {
        // to prevent call to undefined channel and therefore throwing TypeError
        return;
      }
      if (this.calling) {
        // If a call to channel has already registered ignore this call.
        // Once the previous call is completed all the changes to knobStore including the one that
        // triggered this, will be added to the panel.
        // This avoids emitting to the channel within very short periods of time.
        return;
      }
      this.calling = true;
      var timestamp = +new Date();
      setTimeout(function () {
        _this.calling = false;
        // emit to the channel and trigger a panel re-render
        if (_this.channel) _this.channel.emit(_shared.SET, {
          knobs: _this.knobStore.getAll(),
          timestamp: timestamp
        });
      }, PANEL_UPDATE_INTERVAL);
    }
  }]);
  return KnobManager;
}();
exports["default"] = KnobManager;