const express = require('express');
const app = express();

app.get('/', (req, res, next)=>{
    res.send('home page of some sort');
});

// NPM INSTALL EJS
app.get('/rendered', (req, res, next)=>{
    res.render('ejs_file.ejs'); // static html page from views folder
});

// PATH PARAMS FROM EJS
app.get('/fil/:thing', (req, res, next)=>{
    let thing = req.params.thing;  // set standard variable
    // define and pass the variable to ejs via object {}
    res.render('thing.ejs', {thingVar: thing});
});

app.get('*', (req, res, next)=>{
    res.send('catch all page');
});

app.listen(3000, ()=>{
    console.log('server on 3000')
});