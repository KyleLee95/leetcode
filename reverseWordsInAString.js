/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const trimmedSpaces = s.trim();
  const wordArray = trimmedSpaces.split(/\s+/).reverse();
  return wordArray.join(" ");
};
