//find the smallest value and then build the streak from there

function longestConsecutive(nums: number[]): number {
  const numSet: Set<number> = new Set(nums);
  let longest: number = 0;
  for (const num of numSet) {
    const prevNum: number = num - 1;
    const hasPrevNum: boolean = numSet.has(prevNum);
    if (hasPrevNum) {
      continue;
    }

    let score: number = 1;
    let currNum: number = num;
    function hasNextNum(): boolean {
      return numSet.has(currNum + 1);
    }

    while (hasNextNum()) {
      currNum++;
      score++;
    }
    longest = Math.max(score, longest);
  }

  return longest;
}

const test: number[] = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(test));
//Output: 9;
