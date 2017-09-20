var Backbone = require("backbone");
var _ = require("underscore");
var Base = require('./index');
require('backbone-super');

var EventDispatcher = Base.extend({
	initialize:function(attributes, options){
        
    }
});
_.extend(EventDispatcher.prototype, Backbone.Events);


module.exports = EventDispatcher;