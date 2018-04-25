let ENV = {
    currentUrl: 'http://localhost:8080',
    //reference to our client gh pages one / or the localhost8080
    cloudApi: 'https://git.heroku.com/tm-mr-booklist.git',
    //link to heroku app // reference to server
    localApi: 'http://localhost:3000',
    //localhost:3000 this is the nodemon = the local server
    setApi: 'http://localhost:3000',
    //this eill be a function that checks to see if you are runnign https / or http
    //if or ternary / it will select either the cloud or the local
    //set it to localhost 3000 to have it work local
};

Books.prototype.toHtml = function(){
    let template = Handlebars.compile($("#books-detail-template").text());
    return template(this);
};
    
Books.add = book => {
    $.post(`${ENV.cloudApi}/api/v1/books`)
    .then(Books.loadAll)
    .then(callback)
    .catch(errorCallback);
};

Books.fetchOne = callback => {
    $.get(`${ENV.apiUrl}/api/v1/books/:id`)
    .then(Books.loadAll)
    .then(callback)
    .catch(errorCallback);
};
