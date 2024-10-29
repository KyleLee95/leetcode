/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let sortedNums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let maxOps = 0;

  //sort nums, assume merge sort, O(n log(n)). Best case is O(1) where array is already sorted
  while (left < right) {
    const leftNum = sortedNums[left];
    const rightNum = sortedNums[right];
    let sum = leftNum + rightNum;
    if (sum < k) {
      left++;
    }
    if (sum > k) {
      right--;
    }
    if (sum == k) {
      left++;
      right--;
      maxOps++;
    }
  }
  return maxOps;
};
