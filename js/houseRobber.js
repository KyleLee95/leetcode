/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //init dummy values that are guaranteed to be less than the value of a house

  const dp = [0, 0];

  for (let i = 2; i < nums.length + 2; i++) {
    //recurrence
    const tempProfit = dp[i - 2] + nums[i - 2];
    dp[i] = Math.max(tempProfit, dp[i - 1]);
  }
  return dp[dp.length - 1];
};

const test = [1, 2, 3, 1];
console.log(rob(test));
