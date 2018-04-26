'use strict';

var app = app || {};

(function (module) {

    const adminView = {};

    adminView.initAdminPage = function () {
        show('admin');
        $('#admin form').on('submit', function (e) {
            e.preventDefault();
            let token = e.target.passphrase.value;
            $.get(`${ENV.cloudApi}/authenticate`, { token })
                .then((token) => {
                    if (!token) {
                        throw new Error('Invalid Token');
                    }
                    localStorage.token = true;
                    page('/add');
                })
                .catch(() => page('/'));
        });
    };
}(app));