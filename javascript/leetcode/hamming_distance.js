#!/usr/local/bin/node

// var hammingDistance = function(x, y) {
//   x = toBinary(x);
//   y = toBinary(y);
//   console.log(x);
//   console.log(y);
//   diff = 0;
//   var maxPlaces = y > x ? y : x;
//   maxPlaces
//     .toString()
//     .split("")
//     .forEach((place, index) => {
//       xx = x.toString();
//       yy = y.toString();
//       if (place == x[index] && place == yy[index]) {
//         diff++;
//       }
//     });
//   return diff;
// };

// function toBinary(integer) {
//   return (integer >>> 0).toString(2);
// }

var hammingDistance = function (x, y) {
  return y % x;
}

console.log(hammingDistance(4, 14));
