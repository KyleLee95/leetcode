function maxArea(height: number[]): number {
  let leftPtr: number = 0;
  let rightPtr: number = height.length - 1;
  let bestVol: number = 0;
  let dimX = height.length - 1;

  while (leftPtr < rightPtr) {
    //based on shorter height
    const leftSide = height[leftPtr];
    const rightSide = height[rightPtr];
    const shortestSide = Math.min(leftSide, rightSide);
    const intermVol = shortestSide * dimX;
    if (intermVol > bestVol) {
      bestVol = intermVol;
    }
    if (shortestSide === leftSide) {
      leftPtr++;
    } else {
      rightPtr--;
    }
    dimX--;
  }
  return bestVol;
}
const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));
