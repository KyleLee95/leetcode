/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  for (right; right < nums.length; right++) {
    k -= 1 - nums[right];
    if (k < 0) {
      k += 1 - nums[left];
      left += 1;
    }
  }

  return right - left;
};

const tests = [{ nums: [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k: 2 }];
for (const test of tests) {
  console.log(longestOnes(test.nums, test.k));
}

function longestOnesDP(nums, k) {
  // Initialize dp array
  const dp = Array(nums.length).fill(0);
  if (nums[0] === 1) {
    dp[0] = [1, k];
  } else if (k > 0) {
    dp[0] = [1, k - 1];
  } else {
    dp[0] = [0, 0];
  }
  let res = dp[0][0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === 1) {
      dp[i] = [dp[i - 1][0] + 1, dp[i - 1][1]];
    } else {
      if (dp[i - 1][1] > 0) {
        dp[i] = [dp[i - 1][0] + 1, dp[i - 1][1] - 1];
      } else {
        //go back to the start of the run and keep incrementing until we're able to reclaim a flip.
        let startIndexIminusOne = i - 1 - (dp[i - 1][0] - 1);
        let startIndexNew = startIndexIminusOne;
        while (nums[startIndexNew] === 1) {
          startIndexNew += 1;
        }
        dp[i] = [i - (startIndexNew + 1) + 1, 0];
      }
    }
    res = Math.max(res, dp[i][0]);
  }
  return res;
}
