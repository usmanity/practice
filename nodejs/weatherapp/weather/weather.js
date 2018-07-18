const request = require('request');
const API_KEY = '5ce6290e5f9be9121591fb5b4c6bd1fe';

const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`,
        json: true
    }, (err, res, body) => {
        if (!err && res.statusCode === 200) {
            callback(undefined, {
                temp: body.currently.temperature,
                actualTemperature: body.currently.apparentTemperature,
            });
        } else {
            callback("unable to fetch weather right now...go away for awhile");
        }
    });
}

module.exports.getWeather = getWeather;
