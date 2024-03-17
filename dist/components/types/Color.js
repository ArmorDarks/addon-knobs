"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _global = require("global");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _reactColorful = require("react-colorful");
var _theming = require("@storybook/theming");
var _components = require("@storybook/components");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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
var Swatch = _theming.styled.div(function (_ref) {
  var theme = _ref.theme;
  return {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 6,
    width: 16,
    height: 16,
    boxShadow: "".concat(theme.appBorderColor, " 0 0 0 1px inset"),
    borderRadius: '1rem'
  };
});
var ColorButton = (0, _theming.styled)(_components.Button)(function (_ref2) {
  var active = _ref2.active;
  return {
    zIndex: active ? 3 : 'unset'
  };
});
var Popover = _theming.styled.div({
  position: 'absolute',
  zIndex: 2
});
var ColorType = /*#__PURE__*/function (_Component) {
  _inherits(ColorType, _Component);
  var _super = _createSuper(ColorType);
  function ColorType() {
    var _this;
    _classCallCheck(this, ColorType);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty(_assertThisInitialized(_this), "state", {
      displayColorPicker: false
    });
    _defineProperty(_assertThisInitialized(_this), "handleWindowMouseDown", function (e) {
      var displayColorPicker = _this.state.displayColorPicker;
      if (!displayColorPicker || _this.popover.contains(e.target)) {
        return;
      }
      _this.setState({
        displayColorPicker: false
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      var displayColorPicker = _this.state.displayColorPicker;
      _this.setState({
        displayColorPicker: !displayColorPicker
      });
    });
    _defineProperty(_assertThisInitialized(_this), "handleChange", function (color) {
      var onChange = _this.props.onChange;
      onChange(color);
    });
    return _this;
  }
  _createClass(ColorType, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _global.document.addEventListener('mousedown', this.handleWindowMouseDown);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var knob = this.props.knob;
      var displayColorPicker = this.state.displayColorPicker;
      return nextProps.knob.value !== knob.value || nextState.displayColorPicker !== displayColorPicker;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _global.document.removeEventListener('mousedown', this.handleWindowMouseDown);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var knob = this.props.knob;
      var displayColorPicker = this.state.displayColorPicker;
      var colorStyle = {
        background: knob.value
      };
      return /*#__PURE__*/_react["default"].createElement(ColorButton, {
        active: displayColorPicker,
        type: "button",
        name: knob.name,
        onClick: this.handleClick,
        size: "small"
      }, knob.value && knob.value.toUpperCase(), /*#__PURE__*/_react["default"].createElement(Swatch, {
        style: colorStyle
      }), displayColorPicker ? /*#__PURE__*/_react["default"].createElement(Popover, {
        ref: function ref(e) {
          if (e) _this2.popover = e;
        }
      }, /*#__PURE__*/_react["default"].createElement(_reactColorful.RgbaStringColorPicker, {
        color: knob.value,
        onChange: this.handleChange
      })) : null);
    }
  }]);
  return ColorType;
}(_react.Component);
exports["default"] = ColorType;
_defineProperty(ColorType, "propTypes", {
  knob: _propTypes["default"].shape({
    name: _propTypes["default"].string,
    value: _propTypes["default"].string
  }),
  onChange: _propTypes["default"].func
});
_defineProperty(ColorType, "defaultProps", {
  knob: {},
  onChange: function onChange(value) {
    return value;
  }
});
_defineProperty(ColorType, "serialize", function (value) {
  return value;
});
_defineProperty(ColorType, "deserialize", function (value) {
  return value;
});