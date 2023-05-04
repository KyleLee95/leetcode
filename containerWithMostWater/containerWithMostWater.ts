function maxArea(height: number[]): number {
  let area = 0;

  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let base = right - left;
    const leftSide = height[left];
    const rightSide = height[right];
    const shorterSide = Math.min(rightSide, leftSide);
    const currArea = shorterSide * base;
    area = Math.max(currArea, area);
    if (rightSide >= leftSide) {
      left++;
    } else if (leftSide > rightSide) {
      right--;
    }
  }
  return area;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
