"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _components = require("@storybook/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var serialize = function serialize(value) {
  return value;
};
var deserialize = function deserialize(value) {
  return value;
};
var SelectType = function SelectType(_ref) {
  var knob = _ref.knob,
    _onChange = _ref.onChange;
  var options = knob.options;
  var callbackReduceArrayOptions = function callbackReduceArrayOptions(acc, option, i) {
    if (_typeof(option) !== 'object' || option === null) return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, option, option));
    var label = option.label || option.key || i;
    return _objectSpread(_objectSpread({}, acc), {}, _defineProperty({}, label, option));
  };
  var entries = Array.isArray(options) ? options.reduce(callbackReduceArrayOptions, {}) : options;
  var selectedKey = Object.keys(entries).find(function (key) {
    var knobVal = knob.value;
    var entryVal = entries[key];
    if (Array.isArray(knobVal)) {
      return JSON.stringify(entryVal) === JSON.stringify(knobVal);
    }
    return entryVal === knobVal;
  });
  return /*#__PURE__*/_react["default"].createElement(_components.Form.Select, {
    value: selectedKey,
    name: knob.name,
    onChange: function onChange(e) {
      _onChange(entries[e.target.value]);
    },
    size: "flex"
  }, Object.entries(entries).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 1),
      key = _ref3[0];
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: key,
      value: key
    }, key);
  }));
};
SelectType.defaultProps = {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
};
SelectType.propTypes = {
  knob: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    value: _propTypes["default"].any,
    options: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object])
  }),
  onChange: _propTypes["default"].func
};
SelectType.serialize = serialize;
SelectType.deserialize = deserialize;
var _default = SelectType;
exports["default"] = _default;