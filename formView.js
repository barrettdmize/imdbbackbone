var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var MovieModel = require('./itemModel');
module.exports = Backbone.View.extend({
    className: 'addMovie',
    events: {
        'submit form': 'onAddMovie'
    },
    initialize: function() {
        if (!this.model) {
            this.model = new MovieModel();
        }
    },
    onAddMovie: function(evt) {
        evt.preventDefault();
        var newMovie = {};

        if(this.$el.find('input[name="title"]').val() !== "") {
          newMovie.title = this.$el.find('input[name="title"]').val();
        }

            newMovie.releaseyear = this.$el.find(
                'input[name="releaseyear"]').val();

            newMovie.image = this.$el.find('input[name="image"]').val();
            newMovie.description = this.$el.find('textarea[name="plot"]')
                .val();
            newMovie.rating = this.$el.find('textarea[name="rating"]').val();
        this.model.set(newMovie);
        this.model.save();
        this.$el.find('input, textarea').val('');
    },
    template: _.template(tmpl.form),
    render: function() {
        var markup = this.template(this.model.toJSON());
        this.$el.html(markup);
        return this;
    }
});
