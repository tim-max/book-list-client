'use strict';

let ENV = {
    currentUrl: window.location.protocol === 'https',
    //reference to our client gh pages one / or the localhost8080
    cloudApi: 'https://git.heroku.com/tm-mr-booklist.git',
    //link to heroku app // reference to server
    localApi: 'http://localhost:3000',
    //localhost:3000 this is the nodemon = the local server
    setApi: ENV.currentUrl ? ENV.cloudApi : ENV.localApi,
    //this eill be a function that checks to see if you are runnign https / or http
    //if or ternary / it will select either the cloud or the local
    //set it to localhost 3000 to have it work local
};

function Book(booksData) {
    // REVIEW: In Lab 8, we explored a lot of new functionality going on here. Let's re-examine the concept of context. Normally, "this" inside of a constructor function refers to the newly instantiated object. However, in the function we're passing to forEach, "this" would normally refer to "undefined" in strict mode. As a result, we had to pass a second argument to forEach to make sure our "this" was still referring to our instantiated object. One of the primary purposes of lexical arrow functions, besides cleaning up syntax to use fewer lines of code, is to also preserve context. That means that when you declare a function using lexical arrows, "this" inside the function will still be the same "this" as it was outside the function. As a result, we no longer have to pass in the optional "this" argument to forEach!
    Object.keys(booksData).forEach(key => this[key] = booksData[key]);
}

Book.prototype.toHtml = function () {
    let template = Handlebars.compile($('#books-detail-template').text());
    return template(this);
};

Book.loadAll = rows => {
    Book.all = rows.map(book => new Book(book));
    //takes rows by title?
};

Book.add = book => {
    $.post(`${ENV.cloudApi}/api/v1/books`)
        .then(() => page('/'))
        .catch(errorCallback);
};

Book.fetchOne = callback => {
    $.get(`${ENV.apiUrl}/api/v1/books/:id`)
        .then(Book.loadAll)
        .then(callback)
        .catch(errorCallback);
};

Book.fetchAll = callback => {
    $.get('/api/v1/books')
        .then(Book.loadAll)
        .then(callback)
        .catch(errorCallback);
};