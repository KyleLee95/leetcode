/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  const memo = [0, 1];
  let nextFibIdx = 2;
  while (memo.length <= n) {
    const nextFibNum = memo[nextFibIdx - 1] + memo[nextFibIdx - 2];
    memo.push(nextFibNum);
    nextFibIdx++;
  }
  return memo[n];
};
