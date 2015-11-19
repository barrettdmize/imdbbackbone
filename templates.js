module.exports = {
    movie: ["<img src='<%= image %>' >", "<h3><%= title %></h3>",
        "<h4><%= releaseyear %></h4>", "<h5><%= description %></h5>",
        "<p><%= rating %></p>",
    ].join(""),
    form: ["<form>", "<input type='text' placeholder='Title' name='title'>",
        "<input type='text' placeholder='releaseyear' name='releaseyear'>",
        "<input type='text' placeholder='Movie pic' name='image'>",
        "<textarea name='plot'>Plot</textarea>",
        "<textarea name='rating'>Rating</textarea>",
        "<input type='submit' value='add movie'>", "</form>"
    ].join(""),
    header: ["<h2>HEADER</h2>", "<nav>", "<ul>", "<li>home</li>", "</ul>",
        "</nav>"
    ].join(""),
    footer: ["<h2>Footer</h2>", "<nav>", "<ul>", "<li>home</li>", "</ul>",
        "</nav>"
    ].join(""),
};
