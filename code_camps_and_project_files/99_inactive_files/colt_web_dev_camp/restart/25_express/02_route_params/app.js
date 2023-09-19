const express = require('express');
const app = express();  // use app.method

// '/' => 'Hello'
app.get("/", function(req, res, next) {
    res.send('Hello');
});

// '/bye' => 'Hasta'
app.get('/bye', function(req, res, next){
    res.send('Hasta');
});

// '/dog' => 'Woof'
app.get('/dog', function(req, res, next){
    res.send('Woof');
})

// ------- ROUTE PARAMS // PATTERNS ---------->
app.get('/sub_page/:', function(req, res, next){ // : is a single level wildcard
    res.send('random sub page');
});

app.get('/sub_page/:id/:title/', function (req, res, next) {
    // req or variables in route with req.params
    console.log(req.params); // to see info on route and establish variables with names
    let id = req.params.id;
    let title = req.params.title;
    res.send(`you typed ${id} / ${title}`);
});

// ------- CATCH ALL ---------->
app.get('*', function(req, res, next){ // goes at end to not override other routes // route order MATTERS
    res.send('not found');
});

app.listen(3000, function(){
    console.log('on 3000'); // go to http://localhost:3000/ // use nodemon
});