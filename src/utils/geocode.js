const request = require('request')

//Get location
const geoCode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + adress + '.json?access_token=pk.eyJ1IjoiY2dvbnphbGVzIiwiYSI6ImNrNTJ1djFqYzAxb3gzbGx6YmJod3g4ZWgifQ.Lv2zGwa4ty-WibthktyqmA'   
    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })  
}
module.exports = geoCode





