const request = require('request');

request('https://jsonplaceholder.typicode.com/users/4', (error, response, body) => {
    if (!error && response.statusCode == 200) {
        let myData = JSON.parse(body);
        console.log(`Welcome ${myData.name} from ${myData.address.city}`);
    } else {
        console.log(error);
    }
});

