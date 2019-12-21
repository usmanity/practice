#!/usr/local/bin/node

var removeElement = function(nums, val) {
  var final = [];
  nums.forEach(digit => {
    if (digit !== val) {
      final.push(digit);
    }
  });
  nums = final;
  return nums.length;
};

console.log(removeElement([3,2,2,3], 3));
