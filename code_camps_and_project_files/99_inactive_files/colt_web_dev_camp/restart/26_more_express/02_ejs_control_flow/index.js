const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Home');
});

app.get('/ejs_area/:thing', (req, res, next) => {
    let thing = req.params.thing;
    res.render('things.ejs', {thingVar: thing})
});

app.get('/loop', (req, res, next) => {
    let dataSet = [
        {firstName: "Hondo", lastName: "Doe"},
        {firstName: "Boba", lastName: "Foe"},
        {firstName: "Obi", lastName: "Goe"},
        {firstName: "Cad", lastName: "Joe"},
        {firstName: "Ahsoka", lastName: "Koe"}
    ]
    res.render('looper.ejs', {dataSet: dataSet});
});

app.get('*', (req, res, next) => {
    res.send('nobody is home');
});

app.listen(3000, () => {
    console.log('on 3000')
});