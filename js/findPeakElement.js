/**
 * @param {number[]} nums
 * @return {number}
 */

//Binary Search uses the fact that the value to either the left or right is going to
//to be larger or smaller than the value at idx mid
//from there, you can either go left or right based towards the opposite direction in order
//to find the larger value

var findPeakElement = function (nums) {
  let start = 0;
  let end = nums.length - 1;
  if (nums.length === 1) {
    return 0;
  }
  if (nums.length === 2) {
    if (nums[0] > nums[1]) {
      return 0;
    } else {
      return 1;
    }
  }
  while (start < end) {
    let mid = Math.floor((end + start) / 2);
    if (nums[mid] > nums[mid + 1]) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

const tests = [
  [1, 2, 3, 1],
  [1, 2, 1, 3, 5, 6, 4],
];

for (const test of tests) {
  console.log(findPeakElement(test));
}
