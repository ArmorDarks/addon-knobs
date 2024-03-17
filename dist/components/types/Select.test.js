"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _theming = require("@storybook/theming");
var _Select = _interopRequireDefault(require("./Select"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe('Select', function () {
  describe('Object values', function () {
    it('correctly maps option keys and values', function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_theming.ThemeProvider, {
        theme: (0, _theming.convert)(_theming.themes.light)
      }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        knob: {
          name: 'Colors',
          value: '#00ff00',
          options: {
            Green: '#00ff00',
            Red: '#ff0000'
          }
        },
        onChange: jest.fn()
      })));
      var options = _react2.screen.getAllByRole('option');
      // Green
      expect(options[0]).toHaveTextContent('Green');
      expect(options[0]).toHaveProperty('value', 'Green');
      // Red
      expect(options[1]).toHaveTextContent('Red');
      expect(options[1]).toHaveProperty('value', 'Red');
    });
    it('should set the default value for array-values correctly', function () {
      var result = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_theming.ThemeProvider, {
        theme: (0, _theming.convert)(_theming.themes.light)
      }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        knob: {
          name: 'Array values',
          options: {
            '100 x 100': [100, 100],
            '200 x 200': [200, 200]
          },
          value: [200, 200]
        },
        onChange: jest.fn()
      })));
      expect(result.container.firstChild).toHaveProperty('value', '200 x 200');
    });
  });
  describe('Array values', function () {
    it('correctly maps option keys and values', function () {
      (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_theming.ThemeProvider, {
        theme: (0, _theming.convert)(_theming.themes.light)
      }, /*#__PURE__*/_react["default"].createElement(_Select["default"], {
        knob: {
          name: 'Colors',
          value: 'green',
          options: ['green', 'red']
        },
        onChange: jest.fn()
      })));
      var options = _react2.screen.getAllByRole('option');
      // Green
      expect(options[0]).toHaveTextContent('green');
      expect(options[0]).toHaveProperty('value', 'green');
      // Red
      expect(options[1]).toHaveTextContent('red');
      expect(options[1]).toHaveProperty('value', 'red');
    });
  });
});