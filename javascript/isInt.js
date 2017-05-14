function isInt(input) {
  // first check if this input is divisible by 1, meaning it'll always have a remainder of one if it is
  // second check if it's a number
  // the reason the first part is needed is b/c even NaN will return true to being a number type
  return (input % 1 === 0 && typeof(input) === 'number')
}

// first let's check if NaN is not an integer
var not = NaN;
console.log('is', not, 'a number?', isInt(n));

var n = 0;
while (n < 10)
{
  console.log('is', n, 'a number?', isInt(n));
  n++;
}


