'use strict';

var app = app || {};
(function (module) {
    let ENV = {};

    ENV.currentUrl = window.location.protocol === 'https';
    ENV.cloudApi = 'https://git.heroku.com/tm-mr-booklist.git';
    ENV.localApi = 'http://localhost:3000';
    ENV.setApi = ENV.currentUrl ? ENV.cloudApi : ENV.localApi;

    function Book(booksData) {
        // REVIEW: In Lab 8, we explored a lot of new functionality going on here. Let's re-examine the concept of context. Normally, "this" inside of a constructor function refers to the newly instantiated object. However, in the function we're passing to forEach, "this" would normally refer to "undefined" in strict mode. As a result, we had to pass a second argument to forEach to make sure our "this" was still referring to our instantiated object. One of the primary purposes of lexical arrow functions, besides cleaning up syntax to use fewer lines of code, is to also preserve context. That means that when you declare a function using lexical arrows, "this" inside the function will still be the same "this" as it was outside the function. As a result, we no longer have to pass in the optional "this" argument to forEach!
        Object.keys(booksData).forEach(key => this[key] = booksData[key]);
    }
    //this is the constructor

    Book.prototype.toHtml = function () {
        let template = Handlebars.compile($('#books-detail-template').text());
        return template(this);
    };

    Book.loadAll = rows => {
        Book.all = rows.map(book => new Book(book));
        //takes rows by title?
    };

    Book.add = book => {
        $.post(`${ENV.setApi}/api/v1/books`)
            .then(() => page('/'))
            .catch(errorCallback);
    };

    Book.fetchOne = callback => {
        $.get(`${ENV.setApi}/api/v1/books/:${this.book_id}`)
            .then(Book.loadAll)
            .then(callback)
            .catch(errorCallback);
    };

    Book.fetchAll = callback => {
        console.log('in here');
        $.get(`${ENV.setApi}/api/v1/books`)
            .then(Book.loadAll)
            .then(callback)
            .catch(app.errorView.errorCallback);
    };
    Book.insertBook = function (callback) {
        $.post(`${ENV.setApi}/books/:${this.book_id}/update`, { author: this.author, title: this.title, isbn: this.isbn, body: this.body });
        // .then(console.log)
        // .then(callback);
    };
    Book.update = function (callback) {
        $.ajax({
            url: `${ENV.setApi}/books/:${this.book_id}/update`,
            method: 'PUT',
            data: {
                book_id: this.book_id,
                author: this.author,
                title: this.title,
                body: this.body,
            }
        });
    };
    Book.destroy = function (callback) {
        $.ajax({
            url: `/api/v1/books/:${this.book_id}`,
            method: 'DELETE'
        });
    };

    module.Book = Book;

})(app);