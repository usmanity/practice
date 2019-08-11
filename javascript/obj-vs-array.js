var arrayData = [
    {
        longUrl: "http://usmanity.com",
        shortUrl: "u"
    },
    {
        longUrl: "https://github.com/nodesource/distributions/blob/master/README.md#debinstall",
        shortUrl: "a7f3",
    },
    {
        longUrl: "http://yargs.js.org/docs/",
        shortUrl: "0fd9",
    },
    {
        longUrl: "http://expressjs.com/en/api.html#app.post.method",
        shortUrl: "7f8d",
    }
];

var objectData = {
    "u": "http://usmanity.com",
    "a7f3": "https://github.com/nodesource/distributions/blob/master/README.md#debinstall",
    "0fd9": "http://yargs.js.org/docs/",
    "7f8d": "http://expressjs.com/en/api.html#app.post.method"
};

var lookup = "0fd9";

function findInArray(lookup) {
    for (var i = 0; i < arrayData.length; i++) {
        if (arrayData[i].shortUrl === lookup) {
            return true;
        }
    }
}

function findInObject(lookup) {
    return objectData[lookup];
}
