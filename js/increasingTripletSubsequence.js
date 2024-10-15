/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  //nums.length < 3
  if (nums.length < 3) {
    return false;
  }
  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (currNum <= first) {
      first = currNum;
    } else if (currNum <= second) {
      second = currNum;
    } else {
      return true;
    }
  }
  return false;
};
