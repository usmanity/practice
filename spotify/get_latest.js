var p = require('pitchfork');
var page = new p.Page(1);

process.stdout.write('hello')

page.promise.then(function(results){
  process.stdout.write(results)
  results.forEach(function(result){
    result.promise.then(function(review){
      process.stdout.write("review", review.truncated())
    })
  })
})
