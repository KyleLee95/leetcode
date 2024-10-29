/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};
var gcdOfStrings = function (str1, str2) {
  //base case where the there's no pattern
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  //if there is a pattern match, then you just find the largest divisor
  const maxLength = gcd(str1.length, str2.length);
  return str1.slice(0, maxLength);
};

console.log(gcdOfStrings("ABCDEF", "ABC"));
