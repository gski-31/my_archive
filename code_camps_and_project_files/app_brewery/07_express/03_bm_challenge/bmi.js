// Turn the previous BMI calculator code we wrote into a real website using what we've learnt in this module.

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/bmiCalculator.html`);
});

app.post('/', (req, res) => {
        const h = Number(req.body.height);
        const w = Number(req.body.weight);
        const bmi = ((w * 703) / Math.pow(h, 2)).toFixed(2);
        res.send(`your BMI is ${bmi}`);
});

app.listen('3000', () => {
        console.log('listening on 3k');
});
