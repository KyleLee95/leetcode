/**
 * @param {number[]} nums
 * @return {void} do not return anything, modify nums in-place instead.
 */

var movezeroes = function (nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    //swap the elements, continually moving the non-zero elements forward
    if (nums[right] !== 0) {
      [nums[right], nums[left]] = [nums[left], nums[right]];
      left++;
    }
  }
};

const nums = [0, 1, 0, 3, 12];
console.log(movezeroes(nums));
