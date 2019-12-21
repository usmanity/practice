#!/usr/local/bin/node

// I GAVE UP and went with the accepted answer.

var lengthOfLongestSubstring = function(s) {
  const map = {};
  var left = 0;
  return s.split('').reduce((max, current, index) => {
    left = map[current] >= left ? map[current] + 1 : left;
    map[current] = index;
    return Math.max(max, index - left + 1);
  }, 0);
}
var _lengthOfLongestSubstring = function(s) {
  if (s.length === 0) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  var substring = "";
  var previousLetter = "";
  var ls = [];
  var arrayOfLetters = s.split("");
  arrayOfLetters.forEach((letter, index) => {
    var previous = addPreviousLetters(letter, s, index);
    var next = getAllNextCharacters(letter, s, index);
    ls.push(previous);
    ls.push(next);
    // if (!hasRepeatingCharacters(next + previous)) {
    //   ls.push(previous+next);
    // }
  });
  ls = ls
    .map(function(str, i) {
      return {
        index: i,
        length: str.length,
        value: str
      };
    })
    .sort(function(a, b) {
      return b.length - a.length;
    });
  var finalList = [];
  ls.forEach(item => {
    if (s.includes(item.value)) {
      finalList.push(item);
    }
  });
  return finalList.length ? finalList[0].length : 0;
};

function hasRepeatingCharacters(arr) {
  var repeats = false;
  if (typeof arr == "string") {
    arr = arr.split("");
  }
  arr.forEach((letter, index) => {
    if (index != 0) {
      var previousLetter = arr[index - 1];
      var nextLetter = arr[index + 1];
      if (letter == nextLetter || letter == previousLetter) {
        repeats = true;
        return;
      }
    }
  });
  return repeats;
}

function addPreviousLetters(letter, str, index) {
  if (index == 0) {
    return letter;
  }
  var letters = "";
  var nextLetter = "";
  while (index > 0) {
    var curr = str[index];
    if (curr == nextLetter) {
      return letters;
    }
    if (!letters.includes(curr)) {
      letters = letters + curr;
      nextLetter = curr;
    }
    index--;
  }
  return letters;
}

function getAllNextCharacters(letter, str, index) {
  console.log(`working with ${letter}, idx: ${index}`);
  // just return last character
  if (index == str.length - 1) {
    return letter;
  }
  var letters = "";
  var previousLetter = "";
  while (index < str.length) {
    var curr = str[index];
    if (curr == previousLetter) {
      console.log(`returning on repeat: ${curr}`);
      return letters;
    }
    if (!letters.includes(curr)) {
      letters = letters + curr;
      previousLetter = curr;
    }
    index++;
  }
  console.log(letters);
  return letters;
}

// console.log(hasRepeatingCharacters('abcabcd'));
// console.log(hasRepeatingCharacters('aabb'));
// console.log(hasRepeatingCharacters('abcc'));
// console.log(hasRepeatingCharacters('dvdf'));

// console.log(addPreviousLetters('d', 'dvdf', 0));
// console.log(addPreviousLetters("v", "dvdf", 1));
// console.log(addPreviousLetters("d", "dvdf", 2));
// console.log(addPreviousLetters("k", "pwwkew", 3));

// console.log(getAllNextCharacters("d", "dvdf", 0));
// console.log(getAllNextCharacters("v", "dvdf", 1));
// console.log(getAllNextCharacters("d", "dvdf", 2));
// console.log(getAllNextCharacters('a', 'abcabc', 0));
// console.log(getAllNextCharacters('c', 'cdd', 0));
// console.log(getAllNextCharacters("p", "pwwkew", 0));

// console.log(`len: ${lengthOfLongestSubstring("abcabcbb")} expected: 3`);
// console.log(`len: ${lengthOfLongestSubstring("pwwkew")} expected: 3`);
// console.log(`len: ${lengthOfLongestSubstring("")} expected: 0`);
// console.log(`len: ${lengthOfLongestSubstring(" ")} expected: 1`);
// console.log(`len: ${lengthOfLongestSubstring("dvdf")} expected: 3`);
// console.log(`len: ${lengthOfLongestSubstring('cdd')} expected: 2`);
// console.log(`len: ${lengthOfLongestSubstring("ckilbkd")} expected: 5`);
console.log(`len: ${lengthOfLongestSubstring("nfpdmpi")} expected: 5`);
