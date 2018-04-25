

const ENV = {}

    
    ENV.currentUrl = window.location.protocol === 'https:';
    ENV.cloudApi = "https://git.heroku.com/tm-mr-booklist.git";
    ENV.localApi = 'http://localhost:3000';
    ENV.setApi = ENV.currentUrl ? ENV.cloudApi : ENV.localApi; 

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

