"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _theming = require("@storybook/theming");
var _components = require("@storybook/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FlexSpaced = _theming.styled.div({
  flex: 1,
  display: 'flex',
  '&& > *': {
    marginLeft: 10
  },
  '&& > *:first-of-type': {
    marginLeft: 0
  }
});
var FlexInput = (0, _theming.styled)(_components.Form.Input)({
  flex: 1
});
var formatDate = function formatDate(date) {
  var year = "000".concat(date.getFullYear()).slice(-4);
  var month = "0".concat(date.getMonth() + 1).slice(-2);
  var day = "0".concat(date.getDate()).slice(-2);
  return "".concat(year, "-").concat(month, "-").concat(day);
};
var formatTime = function formatTime(date) {
  var hours = "0".concat(date.getHours()).slice(-2);
  var minutes = "0".concat(date.getMinutes()).slice(-2);
  return "".concat(hours, ":").concat(minutes);
};
var DateType = /*#__PURE__*/function (_Component) {
  _inherits(DateType, _Component);
  var _super = _createSuper(DateType);
  function DateType() {
    var _this;
    _classCallCheck(this, DateType);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      valid: undefined
    });
    _defineProperty(_assertThisInitialized(_this), "onDateChange", function (e) {
      var _this$props = _this.props,
        knob = _this$props.knob,
        onChange = _this$props.onChange;
      var _assertThisInitialize = _assertThisInitialized(_this),
        state = _assertThisInitialize.state;
      var valid = false;
      var _e$target$value$split = e.target.value.split('-'),
        _e$target$value$split2 = _slicedToArray(_e$target$value$split, 3),
        year = _e$target$value$split2[0],
        month = _e$target$value$split2[1],
        day = _e$target$value$split2[2];
      var result = new Date(knob.value);
      if (result.getTime()) {
        result.setFullYear(parseInt(year, 10), parseInt(month, 10) - 1, parseInt(day, 10));
        if (result.getTime()) {
          valid = true;
          onChange(result.getTime());
        }
      }
      if (valid !== state.valid) {
        _this.setState({
          valid: valid
        });
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onTimeChange", function (e) {
      var _this$props2 = _this.props,
        knob = _this$props2.knob,
        onChange = _this$props2.onChange;
      var _assertThisInitialize2 = _assertThisInitialized(_this),
        state = _assertThisInitialize2.state;
      var valid = false;
      var _e$target$value$split3 = e.target.value.split(':'),
        _e$target$value$split4 = _slicedToArray(_e$target$value$split3, 2),
        hours = _e$target$value$split4[0],
        minutes = _e$target$value$split4[1];
      var result = new Date(knob.value);
      if (result.getTime()) {
        result.setHours(parseInt(hours, 10));
        result.setMinutes(parseInt(minutes, 10));
        if (result.getTime()) {
          onChange(result.getTime());
          valid = true;
        }
      }
      if (valid !== state.valid) {
        _this.setState({
          valid: valid
        });
      }
    });
    return _this;
  }
  _createClass(DateType, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var knob = this.props.knob;
      var valid = this.state.valid;
      var value = new Date(knob.value);
      if (valid !== false) {
        this.dateInput.value = formatDate(value);
        this.timeInput.value = formatTime(value);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var knob = this.props.knob;
      var name = knob.name;
      var valid = this.state.valid;
      return name ? /*#__PURE__*/_react["default"].createElement(FlexSpaced, {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/_react["default"].createElement(FlexInput, {
        type: "date",
        max: "9999-12-31" // I do this because of a rendering bug in chrome
        ,
        ref: function ref(el) {
          _this2.dateInput = el;
        },
        id: "".concat(name, "date"),
        name: "".concat(name, "date"),
        onChange: this.onDateChange
      }), /*#__PURE__*/_react["default"].createElement(FlexInput, {
        type: "time",
        id: "".concat(name, "time"),
        name: "".concat(name, "time"),
        ref: function ref(el) {
          _this2.timeInput = el;
        },
        onChange: this.onTimeChange
      }), !valid ? /*#__PURE__*/_react["default"].createElement("div", null, "invalid") : null) : null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps() {
      return {
        valid: true
      };
    }
  }]);
  return DateType;
}(_react.Component);
exports["default"] = DateType;
_defineProperty(DateType, "defaultProps", {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
});
_defineProperty(DateType, "propTypes", {
  knob: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    value: _propTypes["default"].number
  }),
  onChange: _propTypes["default"].func
});
_defineProperty(DateType, "serialize", function (value) {
  return new Date(value).getTime() || new Date().getTime();
});
_defineProperty(DateType, "deserialize", function (value) {
  return new Date(value).getTime() || new Date().getTime();
});