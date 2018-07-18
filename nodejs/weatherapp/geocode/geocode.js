const request = require('request');

module.exports = {
    geocode (addr, callback) {
        const address = encodeURIComponent(addr);
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyD303gYe6-0hcOg4QkKH95_6ctiFVJTCvM`;

        request({
            url,
            json: true,
        }, (error, response, body) => {
            if (error) {
                callback("Unable to connect to google servers");
            } else if (body.status === "ZERO_RESULTS") {
                callback("Unable to find that address");
            } else if (body.status === "OK") {
                callback(undefined, {
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng,
                });
            }
        });
    }
}
