(function () {
    //modules

    // var app = app || {};
    //also need this?
    var errorView = {};

    errorView.initErrorPage = (err) => {
        $('.container').hide();
        $('.errorView').show();
        $('#error-message').empty();
        var template = Handlebars.compile($('#error-template').text(err));
        //renders the err argument into the template and appends it ?
        return template(this);
    };

    function errorCallback(err) {
        console.log(err);
        //pass the error to the errorView.initErrorPage view method
    }
}());
//app