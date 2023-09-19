const express = require('express');
const bodyParser = require('body-parser'); // for pulling body info in post request
const https = require('https');

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, (req, res) => {
        console.log('listening on port 3000');
});
