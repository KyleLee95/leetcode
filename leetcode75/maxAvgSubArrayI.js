/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//you can run a loop to prefix sum first
function calculateArrayAverage(subArr, k) {
  const sum = subArr.reduce((a, b) => {
    return a + b;
  }, 0);
  return sum / k;
}
var findMaxAverage = function (nums, k) {
  //cases:
  //nums < k

  if (nums.length < k) {
    calculateArrayAverage(nums);
  }
  if (nums.length === 1) {
    return nums[0];
  }

  let left = 0;
  let right = k;
  let maxAverage = -Infinity;

  while (right <= nums.length) {
    const window = nums.slice(left, right);
    const windowAvg = calculateArrayAverage(Array.from(window), k);
    maxAverage = Math.max(windowAvg, maxAverage);
    left++;
    right++;
  }
  return maxAverage;
};

const tests = [{ nums: [1, 12, -5, -6, 50, 3], k: 4 }];

for (const test of tests) {
  console.log(findMaxAverage(test.nums, test.k));
}

/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
var findMaxAverage = function(nums, k) {
    let currSum = 0;
    let maxSum = Number.MIN_SAFE_INTEGER;


    for (let i = 0; i < nums.length; i++) {
        currSum += nums[i];

        if (i >= k - 1) {
            maxSum = Math.max(currSum, maxSum);
            currSum -= nums[i - (k - 1)];
        }
    }

    return maxSum / k;
};
*/
