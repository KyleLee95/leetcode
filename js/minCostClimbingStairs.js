/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const dp = Array(cost.length + 1).fill(0);
  let nextStepIdx = 2;
  while (nextStepIdx <= cost.length) {
    const oneStepCost = dp[nextStepIdx - 1] + cost[nextStepIdx - 1];
    const twoStepsCost = dp[nextStepIdx - 2] + cost[nextStepIdx - 2];

    dp[nextStepIdx] = Math.min(oneStepCost, twoStepsCost);
    nextStepIdx++;
  }
  return dp[cost.length];
};

const test = [10, 15, 20];
const test2 = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];
console.log(minCostClimbingStairs(test));
console.log(minCostClimbingStairs(test2));
