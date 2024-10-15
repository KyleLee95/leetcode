function threeSum(nums: number[]): number[][] {
  const target = 0;

  const res: number[][] = [];
  const sortedNums = nums.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i - 1] === nums[i]) continue; //prevent repeats
    let left = i + 1;
    let right = nums.length - 1;
    const currNum = sortedNums[i];
    while (left < right) {
      let leftNum = sortedNums[left];
      let rightNum = sortedNums[right];

      let currSum = leftNum + rightNum + currNum;

      //increment/decrement one of the pointers based on the sum
      if (currSum < target) {
        left++;
      } else if (currSum > target) {
        right--;
      } else {
        res.push([leftNum, rightNum, currNum]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++; //prevent repeats
      }
    }
  }

  return res;
}

let t: number[] = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(t));
