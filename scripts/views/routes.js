

page('/', () => app.Book.fetchAll(app.bookView.initIndexPage));
page('/book/:id', ctx => app.bookView.initBookPage(ctx));
page('/add', ctx => app.bookView.initAddPage(ctx));
page('/admin', ctx => app.adminView.initAdminPage(ctx));
//will in turn invoke the bookView.initUpdateFormPage method
page();