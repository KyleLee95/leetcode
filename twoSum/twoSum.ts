const twoSum = (nums: number[], target: number): number[] => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    const difference = target - currNum;
    const hasDifference = map.has(difference);
    if (hasDifference) {
      const indexOfDifference = map.get(difference);
      return [indexOfDifference, i];
    } else {
      map.set(currNum, i);
    }
  }
  return [0];
};

let list = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(list, target));
