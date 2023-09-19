// d0f76619490274031b2ed3b3d07c5f17
// https://api.darksky.net/forecast/d0f76619490274031b2ed3b3d07c5f17/37.8267,-122.4233

/* CHALLENGE: Print a small forecast to the user
1. Print: "It is currently 58.55 degrees out. There is a 0% chance of rain."
2. Test your work!
*/

const request = require('request');

const url = 'https://api.darksky.net/forecast/d0f76619490274031b2ed3b3d07c5f17/37.8267,-122.4233?units=us'

request({url: url, json: true}, (error, response)=>{
    const data = response.body;
    console.log(`It is currently ${data.currently.temperature} degrees in ${data.timezone} on a ${data.currently.summary} Day with a ${data.currently.precipProbability}% chance of rain.`)
})