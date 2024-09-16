function productExceptSelf(nums: number[]): number[] {
  const numsLength: number = nums.length;
  let res: number[] = [1];
  let prefix: number = 1;
  for (let i = 0; i < numsLength; i++) {
    const currNum = nums[i];
    res[i] = prefix;
    prefix *= currNum;
  }
  let postfix: number = 1;
  for (let j = numsLength - 1; j >= 0; j--) {
    const currNum = nums[j];
    res[j] *= postfix;
    postfix *= currNum;
  }
  return res;
}

console.log(productExceptSelf([1, 2, 3, 4]));
