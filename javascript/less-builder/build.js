var fs = require('fs');
require('shelljs/global');
var watch = require('watch');

// check for less.js being installed

var lessToCss = function(){
	var css = exec('lessc -x styles.less');
	console.log('\n------\n');
	console.log(css.output);
	fs.writeFile('styles.css', css.output, function(err) {
	  if(err) {
	    console.log(err);
	  } else {
	    console.log('updated');
	  }
	});
};

watch.createMonitor('.', function(monitor) {
  monitor.on('changed', function(f, curr) {
   lessToCss(); 
  });
});

// looking for files in this dir
fs.readdir('.', function(err, files){
  for (var i = 0; i < files.length; i++){
    console.log(files[i].split('.'));
  }
});
