/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let i = 0;
  let res = 0;

  while (i < chars.length) {
    let groupLength = 1;

    // Count the length of the current group
    while (
      i + groupLength < chars.length &&
      chars[i + groupLength] === chars[i]
    ) {
      groupLength++;
    }

    // Write the character to the result
    chars[res] = chars[i];
    res++;

    // If group length is more than 1, write the group length as well
    if (groupLength > 1) {
      const strRepr = String(groupLength);
      for (let j = 0; j < strRepr.length; j++) {
        chars[res] = strRepr[j];
        res++;
      }
    }

    // Move to the next group
    i += groupLength;
  }

  return res;
};

const tests = [["a"], ["a", "a", "b", "b", "c", "c", "c"]];

for (const test of tests) {
  console.log(compress(test));
}
