/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let rSum = nums.reduce((i, j) => i + j);
  let lSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (lSum === rSum - lSum - nums[i]) {
      return i;
    }
    lSum += curr;
  }
  return -1;
};
pivotIndex([1, 7, 3, 6, 5, 6]);
