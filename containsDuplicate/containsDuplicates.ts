function containsDuplicate(nums: number[]): boolean {
  const map: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currNum: number = nums[i];
    const isDuplicate = map.has(currNum);
    if (isDuplicate) {
      return true;
    } else {
      map.set(currNum, currNum);
      continue;
    }
  }
  return false;
}

const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];

console.log(containsDuplicate(nums));
