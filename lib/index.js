"use strict";

var _backboneEventsStandaloneMin = require("./backbone-events-standalone.min.js");

var _backboneEventsStandaloneMin2 = _interopRequireDefault(_backboneEventsStandaloneMin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventDispatcher = function EventDispatcher() {
  _classCallCheck(this, EventDispatcher);
};

_backboneEventsStandaloneMin2.default.mixin(EventDispatcher.prototype);

module.exports = EventDispatcher;

