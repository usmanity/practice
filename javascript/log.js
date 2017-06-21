function logIterator(n) {
  var startTime = Date.now();
  for (var i = 0; i <= n; ++i) {
    setTimeout(function() {
      var currentTime = Date.now();
      var deltaTime = currentTime - startTime;
      var roundedTime = Math.round( deltaTime / 1000 );

      console.log( i + " after " + roundedTime + "s");
    }, i * 1000);
  }
};

logIterator(3);
