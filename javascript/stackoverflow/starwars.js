const https = require('https');
var j = '';
https.get('https://swapi.co/api/people/1/', (res) => {
    res.setEncoding('utf8');
    res.on('data', function (body) {
        console.log(JSON.parse(body).name);
    });
});

