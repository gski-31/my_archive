// CHALLENGE: create a day of the week app with EJS
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
        const date = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = days[date.getDay()];
        res.render('days', { dayOfWeek: today });
});

app.listen(PORT, (req, res) => {
        console.log('listening on port 3000');
});
