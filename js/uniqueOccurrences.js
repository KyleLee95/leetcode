/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const countMap = new Map();
  for (const num of arr) {
    let numCount = countMap.has(num);
    if (!numCount) {
      countMap.set(num, 1);
    } else {
      let currCount = countMap.get(num);
      countMap.set(num, (currCount += 1));
    }
  }
  const uniques = new Set(countMap.values());
  return uniques.size === Array.from(countMap.values()).length;
};

const tests = [[-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]];

for (const test of tests) {
  console.log(uniqueOccurrences(test));
}
