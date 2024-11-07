/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let left = 0;
  let right = 0;
  let deletes = 1;
  for (right; right < nums.length; right++) {
    //exploiting the fact that the values are 0 or 1.
    //so if we have a 1 we're setting deletes to deletes - (1 - 1=0) = deletes
    deletes -= 1 - nums[right];

    //if we have fewer than 0 deletes (i.e. we've run into two 0's and have already used our delet)
    //then we'll increment our left pointer until we find the first 0 in our window.
    //again, using the fact that the values are 0 and 1, when we reach the 0
    //the math works out to be: deletes(which is -1 here) += 1 - 0(the next occurrence of 0).
    //which will equal 0, so the condition does not evaluate next time because we have to be less than 0
    if (deletes < 0) {
      deletes += 1 - nums[left];
      left += 1;
    }
  }
  //-1 because of the deleted element
  //you have to delete an element even if you have all 1's
  return right - left - 1;
};
const tests = [
  [1, 1, 0, 1],
  [0, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1],
];
for (const test of tests) {
  console.log(longestSubarray(test));
}
