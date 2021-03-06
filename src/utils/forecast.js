const request = require('request')
const forecast = (latitude, longitude, callback) =>{

    const url = 'https://api.darksky.net/forecast/47c48719f9e20b00ca700955bfe5daa6/' + latitude +',' + longitude

    request({ url, json: true }, (error, { body }) => {
      
        if (error) {
            callback('Unable to connect to service', undefined)
        }
        else if (body.error) {
            callback('Unable to find location', undefined)
        } else {      
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + ((body.currently.temperature -32) * (5/9)).toFixed(2) + ' degrees celcius out. There is a ' + body.currently.precipProbability + '% chance of rain. The lowest temperatire is ' + ((body.currently.apparentTemperature - 32) * (5/9)).toFixed(2) + ' degrees celcius.')
        }       
    })  

}

module.exports = forecast