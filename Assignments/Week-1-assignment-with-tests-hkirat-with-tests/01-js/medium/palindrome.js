/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  if (str.length === 0) return true;
  str = str
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
    .replaceAll(" ", "");
  console.log(str);
  let n = str.length - 1;
  for (let i = 0; i <= n / 2; i++) {
    if (str.charAt(i) !== str.charAt(n - i)) return false;
  }
  return true;
}

// console.log(isPalindrome("race car"));

module.exports = isPalindrome;
