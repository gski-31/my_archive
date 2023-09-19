/* CHALLENGE: Print the tlat/long for Los Angeles
1. Fire off a new request to the URL explored in browser
2. Have the request module parse it as JSON
3. Print both the latitude and longitude to the terminal
4. Test your work!
*/

const request = require('request');

const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamcyMzMxIiwiYSI6ImNqeXRkN2hzcjAybzkzZ28wY3B5NmE5amIifQ.xDY6T9sOjVAcbUBOUKUeBg&limit=1'

request({url: location_url, json: true}, (error, response)=>{
    console.log(`Lat is: ${response.body.features[0].center[1]}, Long is: ${response.body.features[0].center[0]}`)
})