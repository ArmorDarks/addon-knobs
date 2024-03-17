"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.manager = void 0;
exports.registerKnobs = registerKnobs;
var _previewApi = require("@storybook/preview-api");
var _coreEvents = require("@storybook/core-events");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _KnobManager = _interopRequireDefault(require("./KnobManager"));
var _shared = require("./shared");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var manager = new _KnobManager["default"]();
exports.manager = manager;
var knobStore = manager.knobStore;
var COMPONENT_FORCE_RENDER_DEBOUNCE_DELAY_MS = 325;
function forceReRender() {
  _previewApi.addons.getChannel().emit(_coreEvents.FORCE_RE_RENDER);
}
function setPaneKnobs() {
  var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : +new Date();
  var channel = _previewApi.addons.getChannel();
  channel.emit(_shared.SET, {
    knobs: knobStore.getAll(),
    timestamp: timestamp
  });
}
var resetAndForceUpdate = function resetAndForceUpdate() {
  knobStore.markAllUnused();
  forceReRender();
};

// Increase performance by reducing how frequently the story is recreated during knob changes
var debouncedResetAndForceUpdate = (0, _debounce["default"])(resetAndForceUpdate, COMPONENT_FORCE_RENDER_DEBOUNCE_DELAY_MS);
function knobChanged(change) {
  var name = change.name;
  var value = change.value; // Update the related knob and it's value.
  var knobOptions = knobStore.get(name);
  knobOptions.value = value;
  if (!manager.options.disableForceUpdate && !knobOptions.disableForceUpdate) {
    if (!manager.options.disableDebounce && !knobOptions.disableDebounce) {
      debouncedResetAndForceUpdate();
    } else {
      resetAndForceUpdate();
    }
  }
}
function knobClicked(clicked) {
  var knobOptions = knobStore.get(clicked.name);
  if (knobOptions.callback && knobOptions.callback() !== false) {
    forceReRender();
  }
}
function resetKnobs() {
  knobStore.reset();
  setPaneKnobs(false);
}
function resetKnobsAndForceReRender() {
  knobStore.reset();
  forceReRender();
  setPaneKnobs(false);
}
function disconnectCallbacks() {
  knobStore.reset();
  var channel = _previewApi.addons.getChannel();
  channel.removeListener(_shared.CHANGE, knobChanged);
  channel.removeListener(_shared.CLICK, knobClicked);
  channel.removeListener(_coreEvents.STORY_CHANGED, resetKnobs);
  channel.removeListener(_shared.RESET, resetKnobsAndForceReRender);
  knobStore.unsubscribe(setPaneKnobs);
}
function connectCallbacks() {
  var channel = _previewApi.addons.getChannel();
  channel.on(_shared.CHANGE, knobChanged);
  channel.on(_shared.CLICK, knobClicked);
  channel.on(_coreEvents.STORY_CHANGED, resetKnobs);
  channel.on(_shared.RESET, resetKnobsAndForceReRender);
  knobStore.subscribe(setPaneKnobs);
  return disconnectCallbacks;
}
function registerKnobs() {
  (0, _previewApi.useEffect)(connectCallbacks, []);
}