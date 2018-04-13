function logIterator(n) {
  var startTime = Date.now();
  for (var i = 0; i < n; i++) {
    setTimeout(function(startTime, i) {
      var currentTime = Date.now();
      var deltaTime = currentTime - startTime;
      var roundedTime = Math.round( deltaTime / 1000 );

      console.log( Math.round((currentTime - startTime) / 1000) + " after " + roundedTime + "s");
    }.bind(this, startTime, i), i * 1000);
  }
};

logIterator(3);
