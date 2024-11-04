/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  let left = 0;
  let right = k;
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxVowels = -Infinity;
  while (right <= s.length) {
    const subStr = s.slice(left, right);
    let currVowelCount = 0;
    //O(n * k) because we run this inner loop for every window of size k
    for (const char of subStr) {
      if (vowels.has(char)) {
        currVowelCount++;
      }
    }
    maxVowels = Math.max(maxVowels, currVowelCount);
    left++;
    right++;
  }
  return maxVowels;
};
//O(n) because it only evaluates the string once
const maxVowels = function (s, k) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxVowels = 0;
  let vowelCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      vowelCount++;
    }
  }
  maxVowels = vowelCount; //count initial window

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      vowelCount--;
    }
    if (vowels.has(s[i])) {
      vowelCount++;
    }
    maxVowels = Math.max(maxVowels, vowelCount);
  }
  return maxVowels;
};

// const tests = [
//   { s: "abciiidef", k: 3 },
//   { s: "aeiou", k: 2 },
//   { s: "leetcode", k: 3 },
// ];
//
// for (const test of tests) {
//   console.log(maxVowels(test.s, test.k));
// }
