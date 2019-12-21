#!/usr/local/bin/node

var h = 'hello'.split('');

var reverseString = function(s) {
  var len = s.length;
  var index = 1;
  var backwards = backwardsCollect(s);
  s.forEach((letter, index) => {
    s.splice(index, 1, letter)
  })
};

function backwardsCollect(arr) {
  return arr.reverse();
}

reverseString(h);
