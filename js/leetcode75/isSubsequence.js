/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  //time complexity
  //best case: O(|s|)
  //worst case: O(|t|)
  //space complexity
  //O(1)

  if (s.length === 0 && t.length >= 0) {
    return true;
  }
  if (s.length > 0 && t.length === 0) {
    return false;
  }

  let i = 0;
  let j = 0;
  let matches = 0;

  while (i < s.length && j < t.length) {
    if (s[i] !== t[j]) {
      j++;
      continue;
    } else if (s[i] === t[j]) {
      matches++;
      i++;
      j++;
    }
  }
  return matches === s.length;
};

const tests = [
  { s: "abc", t: "ahbgdc" },
  { s: "axc", t: "ahbgdc" },
  { s: "", t: "ahbgdc" },
  { s: "axc", t: "" },
];

for (const test of tests) {
  console.log(isSubsequence(test.s, test.t));
}
