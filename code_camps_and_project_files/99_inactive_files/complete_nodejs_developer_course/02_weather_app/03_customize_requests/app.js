// d0f76619490274031b2ed3b3d07c5f17
// https://api.darksky.net/forecast/d0f76619490274031b2ed3b3d07c5f17/37.8267,-122.4233

const request = require('request');

const url = 'https://api.darksky.net/forecast/d0f76619490274031b2ed3b3d07c5f17/37.8267,-122.4233'

// request with 2 arguments: object, function  // see doc for options
request({url: url, json: true}, (error, response)=>{
    const data = response.body;
    console.log(data.currently);
    console.log(data.timezone);
});