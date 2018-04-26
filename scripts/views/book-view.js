'use strict';

var app = app || {};

(function (module) {
    const bookView = {};

    function show(section) {
        $('section').not(`#${section}`).hide();
        $(`#${section}`).show();
    }

    bookView.initIndexPage = function (ctx) {
        $('.container').hide();
        $('.book-view').show();
        $('#items ul').empty();
        show('items');

        app.Book.all.forEach(book => $('#book-items').append(book.toHtml()));
    };

    bookView.initAddPage = function (ctx) {
        show('add');
    };
    //using jQuery's document.ready functionality invoke Book.fetchAll
    bookView.initBookPage = function (ctx) {
        S('#book').empty();
        show('book');
        // app.Book.allEach(book => {
        //     if (parseInt(book.book_id) === parseInt(ctx.params.id)) {
        //         $('#book').append(book.detailToHtml());
        //     }
        // });
        let template = Handlebars.compile($('#book-detail-template').text());
        $('#book').append(template(ctx));
    };
    bookView.initUpdateFormPage = (ctx) => {
        $('.container').hide();
        // $('').show();

        //Using jQuery, target each of the form inputs and pre-populate with their respective values from the book object passed through via ctx.

        // $('#book_id').on('change', 'input, textarea', bookView.create);
        $('#book_id').on('submit', bookView.submit);
    };
    module.bookView = bookView;
})(app);