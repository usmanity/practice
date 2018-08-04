const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, reject) => {
        address = encodeURIComponent(address);
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD303gYe6-0hcOg4QkKH95_6ctiFVJTCvM`;

        request({
            url,
            json: true,
        }, (error, response, body) => {
            if (error) {
                reject("Unable to connect to google servers");
            } else if (body.status === "ZERO_RESULTS") {
                reject("Unable to find that address");
            } else if (body.status === "OK") {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                });
            }
        });
    });
};

geocodeAddress('94110').then((location) => {
    console.log(location);
}, (errorMessage) => {
    console.log(errorMessage);
});
