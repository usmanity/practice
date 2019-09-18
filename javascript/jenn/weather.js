var http = require("http");

function getUserZipCode() {}
function fetchWeatherFromWebsite() {
  var options = {
    host: "cat-fact.herokuapp.com",
    port: 80,
    path: encodeURI("/facts"),
    method: "GET"
  };

  http
    .request(options, function(res) {
      // console.log("STATUS: " + res.statusCode);
      // console.log("HEADERS: " + JSON.stringify(res.headers));
      res.setEncoding("utf8");
      res.on("data", function(chunk) {
        var facts = JSON.parse(chunk);
        var random = Math.floor(Math.random() * 10) + 1;
        console.log(facts);
      });
    })
    .end();
}

console.log(fetchWeatherFromWebsite());
