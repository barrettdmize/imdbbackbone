var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var HeaderView = require('./header');
var FooterView = require('./footer');
var FormView = require('./formView');
var MoviesView = require('./itemCollectionView');
var MovieCollection = require('./itemCollection');
module.exports = Backbone.View.extend({
    el: '#allView',
    initialize: function() {
        var self = this;
        var headerHTML = new HeaderView();
        var footerHTML = new FooterView();
        var formHTML = new FormView();
        var movieCollection = new MovieCollection();
        movieCollection.fetch().then(function() {
            var moviesView = new MoviesView({
                collection: movieCollection
            });
            self.$el.find('header').html(headerHTML.render()
                .el);
            self.$el.find('footer').html(footerHTML.render()
                .el);
            self.$el.find('aside').html(formHTML.render().el);
        });
    }
});
