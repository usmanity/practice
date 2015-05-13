var Test = function(){
  var private = {};

  var printText = function(text){
    console.log(text);
  };

  return {
    printText: printText
  };
};

var test = new Test();

test.printText('hello')

