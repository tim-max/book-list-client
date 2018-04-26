(function () {
    //modules

    // var app = app || {};
    //also need this?
    var errorView = {};

    let err = {
        status: 404,
        message: 'something'
    }

    errorView.initErrorPage = (err) => {
        $('.container').hide();
        $('.errorView').show();
        $('#error-message').empty();
        var template = Handlebars.compile($('#error-template').text());
        //renders the err argument into the template and appends it ?
        return template(this);
    };

    function errorCallback(err) {
        console.log(err);
        //pass the error to the errorView.initErrorPage view method
    }
}());
//appa