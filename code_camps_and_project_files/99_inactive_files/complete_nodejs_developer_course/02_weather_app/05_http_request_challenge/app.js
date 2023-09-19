// get address geo from on api, plug it in as a param into another

// pk.eyJ1IjoiamcyMzMxIiwiYSI6ImNqeXRkN2hzcjAybzkzZ28wY3B5NmE5amIifQ.xDY6T9sOjVAcbUBOUKUeBg

https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamcyMzMxIiwiYSI6ImNqeXRkN2hzcjAybzkzZ28wY3B5NmE5amIifQ.xDY6T9sOjVAcbUBOUKUeBg&limit=1

// d0f76619490274031b2ed3b3d07c5f17
// https://api.darksky.net/forecast/d0f76619490274031b2ed3b3d07c5f17/37.8267,-122.4233

const request = require('request');


const weather_url = 'https://api.darksky.net/forecast/d0f76619490274031b2ed3b3d07c5f17/37.8267,-122.4233?units=us'

request({url: weather_url, json: true}, (error, response)=>{
    const data = response.body;
    console.log(`It is currently ${data.currently.temperature} degrees in ${data.timezone} on a ${data.currently.summary} Day with a ${data.currently.precipProbability}% chance of rain.`)
})
