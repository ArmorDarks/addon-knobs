"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _components = require("@storybook/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var serialize = function serialize() {
  return undefined;
};
var deserialize = function deserialize() {
  return undefined;
};
var ButtonType = function ButtonType(_ref) {
  var knob = _ref.knob,
    _onClick = _ref.onClick;
  return /*#__PURE__*/_react["default"].createElement(_components.Form.Button, {
    type: "button",
    name: knob.name,
    onClick: function onClick() {
      return _onClick(knob);
    }
  }, knob.name);
};
ButtonType.defaultProps = {
  knob: {},
  onClick: function onClick() {}
};
ButtonType.propTypes = {
  knob: _propTypes["default"].shape({
    name: _propTypes["default"].string
  }).isRequired,
  onClick: _propTypes["default"].func.isRequired
};
ButtonType.serialize = serialize;
ButtonType.deserialize = deserialize;
var _default = ButtonType;
exports["default"] = _default;