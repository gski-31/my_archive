const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const PORT = process.env.PORT || 3000;
const app = express();
// add EJS
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // use public to set paths for css and img links
/*
app.get('/', (req, res) => {
        const today = new Date();
        today.getDay() === 6 || today.getDay() === 0 ? res.send("it's the WEEKEND!!!!") : res.send('get back to WORK');
        // can also do multiple re.write before a res.send
});
*/

app.get('/', (req, res) => {
        const today = new Date();
        let day = '';
        today.getDay() === 6 || today.getDay() === 0 ? (day = 'WEEKEND') : (day = 'WORK DAY');
        res.render('lists', { kindOfDay: day }); // has to be a views folder present with lists.ejs inside // {kvp}
});

app.listen(PORT, (req, res) => {
        console.log('listening on port 3000');
});
