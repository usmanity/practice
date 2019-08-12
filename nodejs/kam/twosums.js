console.log(`Start....`);

var twoSum = function(nums, target) {
  let tempArray = new Map();

  for (let i = 1; i < nums.length; i++) {
    nums.forEach((number, index) => {
      if (number + nums[i] === target) {
        tempArray = [index, i];
        // console.log(tempArray); // Output is [0,1]
      }
    });
  }
  return tempArray;
};

const nums = [2, 7, 11, 15];
let temp = twoSum(nums, 9); // Output is Undefined

console.log(temp); // Output is Undefined
