const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

// VARIABLE MOVED OUTSIDE ROUT FOR GLOBAL ACCESS
let sw = ['Kenobi', 'Vader', 'Fett', 'Tano', 'Bane', 'Wren']

app.get(('/', (req, res, next)=>{
    res.render('home')
}))

app.post('/addsw', (req, res, next)=>{ 
    let latestsw = req.body.newsw;
    sw.push(latestsw);  // add to global variable
    // res.send('you reached sw post route')
    res.redirect('sw'); // rerender page
});

app.get('/sw', (req, res, next)=>{
    res.render('sw', {sw: sw});
});

app.get('/stuff/:thing', (req, res, next)=>{
    let thing = req.params.thing;
    res.render('stuff', {varThing: thing});
});

app.get('*', (req, res, next) => {
    res.send('nobody is home');
});

app.listen(3000, () => {
    console.log('on 3000')
});