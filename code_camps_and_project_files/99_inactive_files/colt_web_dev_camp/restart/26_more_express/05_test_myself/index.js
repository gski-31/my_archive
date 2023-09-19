const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());
app.use(express.urlencoded({extended: true})); // body-parser is no mas
app.use(express.static('public'));  // set public folder

app.set('view engine', 'ejs');

let dataSet = ['Stitch', 'Oswald', 'Mickey', 'Willie', 'Pete'];

app.get('/', (req, res, next)=>{
    res.send('home');
});

app.post('/add_d_char', (req, res, next)=>{
    let newName = req.body.d_char;
    dataSet.push(newName);
    res.redirect('disney');
})

app.get('/disney', (req, res,next)=>{
    res.render('disney', {dataSet: dataSet})
})

app.get('*', (req, res, next)=>{
    res.send('nope');
})

app.listen(3000, ()=>{
    console.log('working on port 3000');
})