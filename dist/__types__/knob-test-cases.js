"use strict";

var _index = require("../index");
// Note: this is a helper to batch test return types and avoid "declared but never read" errors
function expectKnobOfType() {}
var groupId = 'GROUP-ID1';

/** Text knob */

expectKnobOfType((0, _index.text)('text simple', 'Batman'), (0, _index.text)('text with group', 'default', groupId));

/** Date knob */

expectKnobOfType((0, _index.date)('date simple', new Date('January 20 1887')), (0, _index.date)('date with group', new Date(), groupId));

/** Boolean knob */

expectKnobOfType((0, _index["boolean"])('boolean simple', false), (0, _index["boolean"])('boolean with group', true, groupId));

/** Color knob */

expectKnobOfType((0, _index.color)('color simple', 'black'), (0, _index.color)('color with group', '#ffffff', groupId));

/** Number knob */

expectKnobOfType((0, _index.number)('number basic', 42), (0, _index.number)('number with options', 72, {
  range: true,
  min: 60,
  max: 90,
  step: 1
}), (0, _index.number)('number with group', 1, {}, groupId));

/** Radios knob */

expectKnobOfType((0, _index.radios)('radio with string values', {
  1100: '1100',
  2200: '2200',
  3300: '3300'
}, '2200'));
expectKnobOfType((0, _index.radios)('radio with number values', {
  3: 3,
  7: 7,
  23: 23
}, 3));
expectKnobOfType((0, _index.radios)('radio with mixed value', {
  1100: '1100',
  2200: 2200,
  3300: '3300'
}, null, groupId));

/** Select knob */
var SomeEnum;
(function (SomeEnum) {
  SomeEnum[SomeEnum["Type1"] = 1] = "Type1";
  SomeEnum[SomeEnum["Type2"] = 2] = "Type2";
})(SomeEnum || (SomeEnum = {}));
var ButtonVariant;
(function (ButtonVariant) {
  ButtonVariant["primary"] = "primary";
  ButtonVariant["secondary"] = "secondary";
})(ButtonVariant || (ButtonVariant = {}));
var stringLiteralArray = ['Apple', 'Banana', 'Grapes'];
expectKnobOfType((0, _index.select)('select with string options', {
  None: 'none',
  Underline: 'underline',
  'Line-through': 'line-through'
}, 'none'), (0, _index.select)('select with string array', ['yes', 'no'], 'yes'), (0, _index.select)('select with string literal array', stringLiteralArray, stringLiteralArray[0]), (0, _index.select)('select with readonly array', ['red', 'blue'], 'red'), (0, _index.select)('select with string enum options', ButtonVariant, ButtonVariant.primary));
expectKnobOfType((0, _index.select)('select with an undefined in array', ['Apple', 'Banana', 'Grapes', undefined, null, false], undefined));
expectKnobOfType((0, _index.select)('select with null option', {
  a: 'Option',
  b: null
}, null, groupId));
expectKnobOfType((0, _index.select)('select with number options', {
  'type a': 1,
  'type b': 2
}, 1), (0, _index.select)('select with numeric enum options', {
  'type a': SomeEnum.Type1,
  'type b': SomeEnum.Type2
}, SomeEnum.Type2), (0, _index.select)('select with number array', [1, 2, 3, 4], 1), (0, _index.select)('select with readonly number array', [1, 2], 1));
expectKnobOfType((0, _index.select)('select with null option', {
  a: 1,
  b: null
}, null, groupId));
expectKnobOfType((0, _index.select)('select with string and string array options', {
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow',
  Rainbow: ['red', 'orange', 'etc'],
  None: 'transparent'
}, 'red'));
expectKnobOfType((0, _index.select)('select with number and number array options', {
  Red: 1,
  Blue: 2,
  Yellow: 3,
  Rainbow: [4, 5, 6],
  None: 7
}, 7));
expectKnobOfType((0, _index.select)('select with string, string array, and null options', {
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow',
  Rainbow: ['red', 'orange', 'etc'],
  None: null
}, null));
expectKnobOfType((0, _index.select)('select with number array options', {
  ones: [1],
  twos: [2, 2],
  threes: [3, 3, 3]
}, [1]));
expectKnobOfType((0, _index.select)('select with object options', {
  foo: {
    foo: 'bar'
  },
  bar: {
    bar: 'foo'
  },
  foobar: {
    foobar: 'barfoo'
  }
}, {
  foo: 'bar'
}));
expectKnobOfType((0, _index.select)('select with object, array, and string options', {
  foo: {
    foo: 'bar'
  },
  bar: 'bar',
  foobar: ['foo', 'bar']
}, {
  foo: 'bar'
}));

/** Object knob */

expectKnobOfType((0, _index.object)('object simple', {
  fontFamily: 'Arial',
  padding: 20
}), (0, _index.object)('object with group', {}, groupId));

/** Options knob */

var visibleToolOptions = {
  hammer: 'hammer',
  saw: 'saw',
  drill: 'drill'
};
expectKnobOfType((0, _index.optionsKnob)('options with single selection', visibleToolOptions, 'hammer', {
  display: 'check'
}), (0, _index.optionsKnob)('options with multi selection', visibleToolOptions, ['hammer', 'saw'], {
  display: 'inline-check'
}), (0, _index.optionsKnob)('options with readonly multi selection', visibleToolOptions, ['hammer'], {
  display: 'radio'
}), (0, _index.optionsKnob)('options with group', {}, '', {
  display: 'check'
}));
expectKnobOfType((0, _index.optionsKnob)('select with null option', {
  a: 1,
  b: null
}, null, {
  display: 'check'
}));
expectKnobOfType((0, _index.optionsKnob)('options with string and string array options', {
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow',
  Rainbow: ['red', 'orange', 'etc'],
  None: 'transparent'
}, 'red', {
  display: 'check'
}));
expectKnobOfType((0, _index.optionsKnob)('select with number and number array options', {
  Red: 1,
  Blue: 2,
  Yellow: 3,
  Rainbow: [4, 5, 6],
  None: 7
}, 7, {
  display: 'check'
}));
expectKnobOfType((0, _index.optionsKnob)('select with string, string array, and null options', {
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow',
  Rainbow: ['red', 'orange', 'etc'],
  None: null
}, null, {
  display: 'check'
}));
expectKnobOfType((0, _index.optionsKnob)('select with number array options', {
  ones: [1],
  twos: [2, 2],
  threes: [3, 3, 3]
}, [1], {
  display: 'check'
}));

/** Array knob */

var arrayReadonly = (0, _index.array)('array as readonly', ['hi', 'there']);
expectKnobOfType((0, _index.array)('array simple', ['red', 'green', 'blue']), arrayReadonly, (0, _index.array)('array with group', [], ',', groupId));

// Should return a mutable array despite the readonly input
arrayReadonly.push('Make sure that the output is still mutable although the input need not be!');

/** Button knob */

expectKnobOfType((0, _index.button)('button simple', function () {}), (0, _index.button)('button with group', function () {
  return undefined;
}, groupId));

/** Files knob */

expectKnobOfType((0, _index.files)('files simple', 'image/*', []), (0, _index.files)('files with group', 'image/*', ['img.jpg'], groupId));

/** Generic knob */

expectKnobOfType((0, _index.knob)('generic knob as text', {
  type: 'text',
  value: 'a'
}), (0, _index.knob)('generic knob as color', {
  type: 'color',
  value: 'black'
}), (0, _index.knob)('generic knob as string select', {
  type: 'select',
  value: 'yes',
  options: ['yes', 'no'],
  selectV2: true
}));
expectKnobOfType((0, _index.knob)('generic knob as number', {
  type: 'number',
  value: 42
}), (0, _index.knob)('generic knob as select', {
  type: 'radios',
  value: 3,
  options: {
    3: 3,
    7: 7,
    23: 23
  }
}), (0, _index.knob)('generic knob as number select', {
  type: 'select',
  value: 1,
  options: [1, 2],
  selectV2: true
}));