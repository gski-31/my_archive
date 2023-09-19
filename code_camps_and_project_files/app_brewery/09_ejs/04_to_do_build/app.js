const express = require('express');
const bodyParser = require('body-parser'); // for pulling body info in post request
const https = require('https');

const PORT = process.env.PORT || 3000;

const app = express();

const items = ['Buy', 'Open', 'Use']; // declared prior from post request // use an array for multiple items

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })); // for pulling body info in post request

app.get('/', (req, res) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date();
        const current = date.toLocaleDateString(undefined, options);
        res.render('date', { currentDate: current, newListItems: items });
});

// CHALLENGE: Create a form and POST request
app.post('/', (req, res) => {
        items.push(req.body.newItem); // var name pulled from previous declaration
        // res.render('date', { newItem: item }); can't render 2x, move up to get section
        res.redirect('/');
});

app.listen(PORT, (req, res) => {
        console.log('listening on port 3000');
});
