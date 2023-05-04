function threeSum(nums: number[]): number[][] {
  const sumMap = new Map();
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let leftNum = nums[left];
    let rightNum = nums[right];

    let currSum = leftNum + rightNum;

    if (currSum < 0) {
    }
  }

  return [];
}
