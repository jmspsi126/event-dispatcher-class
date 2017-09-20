var Backbone = require("backbone");
var _ = require("underscore");
require('backbone-super');

var Base = function(attributes, options) {
    this.initialize.apply(this, arguments);
};
Base.extend = Backbone.Model.extend;

module.exports = Base;





