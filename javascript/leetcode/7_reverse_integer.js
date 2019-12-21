#!/usr/local/bin/node

// var reverse = function (x) {
//   var reversed = Math.abs(x).toString().split('').reverse().join('');
//   if (reversed > 2 ** 32) { return 0 }
//   return reversed * Math.sign(x);
// }

var reverse = function(x) {
  var str = x.toString();
  if (x > 2 ** 31 || x < -(2 ** 31)) {
    return 0;
  }
  if (x < 0) {
    str = str.slice(1, str.length);
    str = str.split("");
    str = str.reverse().join("");
    var int = parseInt(`-${str}`);
    if (int < -(2 ** 31 - 1)) {
      return 0;
    }
    return int;
  }
  str = str.split("");
  str = str.reverse().join("");

  if (parseInt(str) > 2 ** 31) {
    return 0;
  }
  return parseInt(str);
};

// console.log(reverse(123));
// console.log(reverse(-321));
console.log(reverse(-2147483648));
console.log(reverse(1563847412));
