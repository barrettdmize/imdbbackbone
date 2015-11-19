// this is a bb collection
var $ = require('jquery');
var Backbone = require('backbone');
var ItemModel = require('./itemModel');
Backbone.$ = $;
module.exports = Backbone.Collection.extend({
    url: 'http://tiny-tiny.herokuapp.com/collections/backboneimdb',
    model: ItemModel,
    initialize: function() {}
});
