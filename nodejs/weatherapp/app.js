const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocode(argv.address, (err, results) => {
    if (err) {
        console.log(err);
    } else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (error, weatherResults) => {
            if (!error) {
                console.log(`Here is the weather: ${weatherResults.temp}ºF`);
            } else {
                console.log(error);
            }
        });

    }
});

