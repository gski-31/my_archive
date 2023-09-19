const express = require('express');
const bodyParser = require('body-parser');
const https = require('https'); // request is deprecated

require('dotenv').config(); // hide apikeys

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static('public')); // use public to set paths for links
app.use(bodyParser.urlencoded({ extended: true }));

// ABOVE THIS LINE IS STANDARD AND COULD BE PUT IN A TEXT EXPANDER

app.get('/', (req, res) => {
        res.sendFile(`${__dirname}/signup.html`);
});

app.post('/', (req, res) => {
        const firstName = req.body.inputFirstName;
        const lastName = req.body.inputLastName;
        const emailAddress = req.body.inputEmail;
        // use mailchimp api documentation to set structure of merge fields
        const data = {
                members: [
                        {
                                email_address: emailAddress,
                                status: 'subscribed',
                                merge_fields: {
                                        FNAME: firstName,
                                        LNAME: lastName,
                                },
                        },
                ],
        };
        // parse the data for mailchimp
        const jsonData = JSON.stringify(data);

        const url = `https://us18.api.mailchimp.com/3.0/lists/${process.env.LIST_ID}`; // mailchimp list url

        const options = {
                method: 'POST',
                auth: `${process.env.API_KEY}`, // mailchimp set options
        };

        // setup the request the data
        const requestData = https.request(url, options, response => {
                // redirect after submit
                if (response.statusCode === 200) {
                        res.sendFile(`${__dirname}/success.html`);
                } else {
                        res.sendFile(`${__dirname}/failure.html`);
                }
                response.on('data', data => {
                        console.log(JSON.parse(data));
                });
        });

        requestData.write(jsonData); // write data to mailchimp
        requestData.end(); // end
});

app.listen(PORT, () => {
        console.log('listening on 3000');
});
