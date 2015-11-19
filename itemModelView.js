var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
module.exports = Backbone.View.extend({
    tagName: 'article',
    initialize: function() {},
    template: _.template(tmpl.movie),
    render: function() {
        var markup = this.template(this.model.toJSON());
        this.$el.html(markup);
        return this;
    }
});
