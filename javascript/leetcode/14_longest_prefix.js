#!/usr/local/bin/node

var longestCommonPrefix = function(strs) {
  var para = strs.reduce((p, arr, i) => {
    if (p.length === 0) {
      p = arr[0];
    } else {
      if (!arr.includes(p)) {
        return p;
      } else {
        p = p + arr[i][0]
      }
    }
  })
  return para;
}

// var longestCommonPrefix = function(strs) {
//   var shortest = findShortestString(strs);
//   var index = 1;
//   var substring = '';
//   if (shortest == undefined) {
//     return "";
//   }
//   if (strs.length == 1) {
//     return strs[0];
//   }
//   while (index < shortest.length) {
//     if (allArraysHave(strs, shortest.value[index], index)) {
//       substring = substring + shortest.value[index];
//     } else {
//       return substring;
//     }

//     index++;
//   }
//   return substring;
// };

// function allArraysHave(arrays, value, index) {
//   var hasValue = true;
//   arrays.forEach((arr) => {
//     hasValue = arr[index] == value;
//   })
//   return hasValue;
// }

// function findShortestString(strings) {
//   var str_obj = strings.map(str => {
//     return {
//       value: str,
//       length: str.length
//     };
//   });
//   str_obj.sort((a, b) => {
//     return a.length - b.length || b.length - a.length;
//   });
//   return str_obj[0];
// }


console.log(longestCommonPrefix(['flower', 'flight', 'flow']))
console.log(longestCommonPrefix(['c', 'c']))
console.log(longestCommonPrefix(['kristen', 'karen', 'kelly']))
