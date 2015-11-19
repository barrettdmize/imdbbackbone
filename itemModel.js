var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
    urlRoot: 'http://tiny-tiny.herokuapp.com/collections/backboneimdb',
    idAttribute: '_id',
    defaults: function() {
        return {
            title: "Bagel the Movie",
            releaseyear: "2001",
            image: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Bagel-Plain-Alt.jpg",
            description: "Bagel the Movie is a non-stop thrill ride about the history of the humble bagel",
            rating: "1"
        };
    },
    initialize: function() {}
});
