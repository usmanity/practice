const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
    .options({
        'address': {
            demand: true,
            alias: 'a',
            describe: 'Provide an address to fetch weather',
            string: true,
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

const API_KEY = '5ce6290e5f9be9121591fb5b4c6bd1fe';
const address = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD303gYe6-0hcOg4QkKH95_6ctiFVJTCvM`;

axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        throw new Error('Unable to find that address');
    }

    const lat = response.data.results[0].geometry.location.lat;
    const lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${API_KEY}/${lat},${lng}`;
    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
    var temperature = response.data.currently.temperature;
    var apparentTemp = response.data.currently.apparentTemperature;
    console.log(`It's currently ${temperature}ºF. It feels like ${apparentTemp}ºF.`);
}).catch((errorMessage) => {
    console.log(errorMessage);
})
