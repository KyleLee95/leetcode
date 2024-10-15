/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const memo = [0, 1, 1];
  let nextFibIdx = 3;
  while (memo.length <= n) {
    const nextFibNum =
      memo[nextFibIdx - 1] + memo[nextFibIdx - 2] + memo[nextFibIdx - 3];
    memo.push(nextFibNum);
    nextFibIdx++;
  }
  return memo[n];
};
