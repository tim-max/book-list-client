'use strict';
var app = app || {};

(function (module) {
    const errorView = {};


    let err = {
        status: 404,
        message: 'something'
    }

    errorView.initErrorPage = (err => {
        $('.container').hide();
        $('.errorView').show();
        $('#error-message').empty();
        var template = Handlebars.compile($('#error-template').text());
        //renders the err argument into the template and appends it ?
        $('#error-message').append(template);
    });

    errorView.errorCallback = (err => {
        console.log(err);
        //pass the error to the errorView.initErrorPage view method
    });

    module.errorView = errorView;

})(app);