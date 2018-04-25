(function () {
    var app = app || {};
    //need this?

    let bookView = {};

    bookView.initIndexPage() {
        $('.container').hide();
        $('.book-view').show();

        Book.all.forEach(a => $('#book-list').append(a.toHtml()));

    }
    //using jQuery's document.ready functionality invoke Book.fetchAll

}());