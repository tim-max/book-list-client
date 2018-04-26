

page('/', ctx => app.Book.fetchAll(app.bookView.initIndexPage));
page('/books/:book_id/update', ctx => app.Book.update(app.bookView.initUpdateFormPage(ctx)));
page('/api/v1/books/:id', ctx => app.Book.destroy(app.bookView.initUpdateFormPage(ctx)));
page('/book/:book_id', ctx => app.Book.fetchOne(ctx, app.bookView.initBookPage));
page('/add', ctx => app.bookView.initAddPage(ctx));
page('/admin', ctx => app.adminView.initAdminPage(ctx));

//will in turn invoke the bookView.initUpdateFormPage method
page();

