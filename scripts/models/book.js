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