const request = require('request');

// // ======== LOCATION ============ ==>

// const location_url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/glendale%20california.json?access_token=pk.eyJ1IjoiamcyMzMxIiwiYSI6ImNqeXRkN2hzcjAybzkzZ28wY3B5NmE5amIifQ.xDY6T9sOjVAcbUBOUKUeBg&limit=1'

// request({ url: location_url, json: true }, (error, response) => {
//     if (error) {
//         console.log(error)
//     } else if (response.body.features.length === 0) {
//         console.log('enter a search param')
//     } else {
//         console.log(`Lat is: ${response.body.features[0].center[1]}, Long is: ${response.body.features[0].center[0]}`)
//     }
// })

// // ======== WEATHER ============ ==>

// const weather_url = 'https://api.darksky.net/forecast/d0f76619490274031b2ed3b3d07c5f17/37.8267,-122.4233?units=us'

// request({ url: weather_url, json: true }, (error, response) => {
//     if (error) {
//         console.log(error)
//     } else if (response.body.error) {
//         console.log(response.body.error)
//     } else {
//         console.log(`It is currently ${response.body.currently.temperature} degrees in ${response.body.timezone} on a ${response.body.currently.summary} Day with a ${response.body.currently.precipProbability}% chance of rain.`)
//     }
// })

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + 'json?access_token=pk.eyJ1IjoiamcyMzMxIiwiYSI6ImNqeXRkN2hzcjAybzkzZ28wY3B5NmE5amIifQ.xDY6T9sOjVAcbUBOUKUeBg&limit=1'
    request({ url: url, json: true }, (error, response) => {
        if (err) {
            callback()
        } else {

        }
    })
}

geocode('san diego', (error, response) => {

})