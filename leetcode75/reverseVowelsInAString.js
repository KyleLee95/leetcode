/**
 * @param {string} s
 * @return {string}
 */

//can also do two pointers.
//save yourself the extra space
//you can do it in place, probably
var reverseVowels = function (s) {
  //exit early if string is empty or of length 1
  let res = "";
  if (s.length === 0) {
    return res;
  }

  const revVowels = [];
  const vowelList = new Set(["a", "e", "i", "o", "u"]);

  for (let i = 0; i < s.length; i++) {
    const currLetter = s[i];
    if (vowelList.has(currLetter.toLowerCase())) {
      revVowels.push(currLetter);
    }
  }

  for (let j = 0; j < s.length; j++) {
    const currLetter = s[j];
    if (vowelList.has(currLetter.toLowerCase())) {
      const lastVowel = revVowels.pop();
      res += lastVowel;
    } else {
      res += currLetter;
    }
  }
  return res;
};

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));
