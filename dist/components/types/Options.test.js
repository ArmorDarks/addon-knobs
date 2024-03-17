"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Options = _interopRequireDefault(require("./Options"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var mockOn = jest.fn();
describe('Options', function () {
  var knob;
  var wrapper;
  var firstLabel;
  var firstInput;
  var lastInput;
  describe('renders checkbox input', function () {
    beforeEach(function () {
      knob = {
        name: 'Color',
        value: undefined,
        defaultValue: ['#0ff'],
        options: {
          Red: '#f00',
          Green: '#090',
          Blue: '#0ff'
        },
        optionsObj: {
          display: 'check'
        }
      };
      wrapper = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Options["default"], {
        knob: knob,
        onChange: mockOn,
        display: knob.optionsObj.display
      })).container;
      firstLabel = wrapper.querySelector('label');
      firstInput = wrapper.querySelector('input');
      lastInput = Array.from(wrapper.querySelectorAll('input')).pop();
    });
    it('correctly renders label', function () {
      expect(firstLabel).toHaveTextContent('Red');
    });
    it('correctly sets checkbox value', function () {
      expect(firstInput).toHaveProperty('value', '#f00');
    });
    it('marks the correct default checkbox as checked', function () {
      expect(firstInput).toHaveProperty('checked', false);
      expect(lastInput).toHaveProperty('checked', true);
    });
    it.skip('updates on change event', function () {
      // expect(wrapper.props().knob.defaultValue).toEqual(['#0ff']);

      // firstInput.simulate('change');

      // expect(mockOn).toHaveBeenCalled();
      // expect(wrapper.props().knob.defaultValue).toEqual(['#0ff', '#f00']);
    });
  });
  describe('renders radio input', function () {
    beforeEach(function () {
      knob = {
        name: 'Color',
        value: '#0ff',
        options: {
          Red: '#f00',
          Green: '#090',
          Blue: '#0ff'
        },
        optionsObj: {
          display: 'radio'
        }
      };
      wrapper = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Options["default"], {
        knob: knob,
        onChange: mockOn,
        display: knob.optionsObj.display
      })).container;
      firstLabel = wrapper.querySelector('label');
      firstInput = wrapper.querySelector('input');
      lastInput = Array.from(wrapper.querySelectorAll('input')).pop();
    });
    it('correctly renders label', function () {
      expect(firstLabel).toHaveTextContent('Red');
    });
    it('correctly sets radio input value', function () {
      expect(firstInput).toHaveProperty('value', '#f00');
    });
    it('marks the correct default radio input as checked', function () {
      expect(firstInput).toHaveProperty('checked', false);
      expect(lastInput).toHaveProperty('checked', true);
    });
    it.skip('updates on change event', function () {
      // firstInput.simulate('change');
      // expect(mockOn).toHaveBeenCalled();
    });
  });
  describe.skip('renders select input', function () {
    var selectInput;
    beforeEach(function () {
      knob = {
        name: 'Color',
        value: '#0ff',
        options: {
          Red: '#f00',
          Green: '#090',
          Blue: '#0ff'
        },
        optionsObj: {
          display: 'select'
        }
      };
      wrapper = (0, _react2.render)( /*#__PURE__*/_react["default"].createElement(_Options["default"], {
        knob: knob,
        onChange: mockOn,
        display: knob.optionsObj.display
      })).container;
      // selectInput = wrapper.find(ReactSelect).find('input');
    });

    it('updates when dropdown is opened and first option selected', function () {
      // // Simulate the arrow down event to open the dropdown menu.
      // selectInput.simulate('keyDown', { key: 'ArrowDown', keyCode: 40 });

      // // Simulate the enter key to select the first option.
      // selectInput.simulate('keyDown', { key: 'Enter', keyCode: 13 });

      // selectInput.simulate('change');
      expect(mockOn).toHaveBeenCalled();
    });
  });
});