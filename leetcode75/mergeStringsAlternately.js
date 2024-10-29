/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

const mergeAlternately = function (word1, word2) {
  //check case where strings are empty
  let output = "";

  if (word1.length === 0 && word2.length > 0) {
    return word2;
  }
  if (word1.length > 0 && word2.length === 0) {
    return word1;
  }

  let i = 0;
  while (word1[i] && word2[i]) {
    const currWord1 = word1[i];
    const currWord2 = word2[i];
    const temp = currWord1 + currWord2;
    output += temp;
    i++;
  }
  if (!word1[i]) {
    output += word2.slice(i);
  }
  if (!word2[i]) {
    output += word1.slice(i);
  }
  return output;
};
