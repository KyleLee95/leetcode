/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  const res = [0];
  let idx = 0;
  while (idx < gain.length) {
    res.push(res[idx] + gain[idx]);
    idx++;
  }
  console.log(res);
  return Math.max(...res);
};

const tests = [
  [-5, 1, 5, 0, -7],
  [52, -91, 72],
  [
    44, 32, -9, 52, 23, -50, 50, 33, -84, 47, -14, 84, 36, -62, 37, 81, -36,
    -85, -39, 67, -63, 64, -47, 95, 91, -40, 65, 67, 92, -28, 97, 100, 81,
  ],
];

for (const test of tests) {
  console.log(largestAltitude(test));
}
