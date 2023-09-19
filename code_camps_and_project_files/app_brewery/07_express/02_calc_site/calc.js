const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true })); // implement body parser to pass url data

app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/index.html`); // __dirname is relative to path
});

app.post('/', (req, res) => {
        const number1 = req.body.num1; // or Number(req.body.num1) instead of parseInt
        const number2 = req.body.num2; // num1 and num2 comes from HTML form names
        const sum = parseInt(number1) + parseInt(number2);
        res.send(`the sum is ${sum}`);
});

app.listen(3000, () => {
        console.log('server on 3k');
});
