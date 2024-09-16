function topKFrequent(nums: number[], k: number): number[] | undefined {
  const freqMap: Map<number, number> = new Map();
  const numsLength = nums.length;
  const res: number[] = new Array<number>();
  for (let i = 0; i < numsLength; i++) {
    const currNum = nums[i];
    const hasNumber = freqMap.has(currNum);
    if (hasNumber) {
      let count = freqMap.get(currNum);
      if (count) freqMap.set(currNum, (count += 1));
    } else {
      freqMap.set(currNum, 1);
    }
  }
  const freqMapArr = Array.from(freqMap.entries());
  const sortedFreqMapArr = freqMapArr.sort((a, b) => {
    return b[1] - a[1];
  });
  for (let i = 0; i < k; i++) {
    const currMostFreqNum = sortedFreqMapArr[i];
    res.push(currMostFreqNum[0]);
  }
  return res;
}
const arr: number[] = [1, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3];
const k = 2;

console.log(topKFrequent(arr, k));
