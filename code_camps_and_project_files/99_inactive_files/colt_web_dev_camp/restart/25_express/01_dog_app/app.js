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

app.listen(3000, function(){
    console.log('on 3000'); // go to http://localhost:3000/ // use nodemon
});