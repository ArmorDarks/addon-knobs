"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Radio = _interopRequireDefault(require("../types/Radio"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('Radio', function () {
  var knob;
  beforeEach(function () {
    knob = {
      name: 'Color',
      value: '#319C16',
      options: {
        Green: '#319C16',
        Red: '#FF2B2B'
      }
    };
  });
  describe('displays value of button input', function () {
    it('correctly renders labels', function () {
      var wrapper = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
        knob: knob
      })).container;
      var greenLabel = wrapper.querySelector('label');
      expect(greenLabel).toHaveTextContent('Green');
    });
    it('sets value on the radio buttons', function () {
      var wrapper = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
        knob: knob
      })).container;
      var greenInput = wrapper.querySelector('input');
      expect(greenInput).toHaveProperty('value', '#319C16');
    });
    it('marks the correct checkbox as checked', function () {
      var wrapper = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Radio["default"], {
        knob: knob
      })).container;
      var greenInput = wrapper.querySelector('input');
      var redInput = Array.from(wrapper.querySelectorAll('input')).pop();
      expect(greenInput).toHaveProperty('checked', true);
      expect(redInput).toHaveProperty('checked', false);
    });
  });
});