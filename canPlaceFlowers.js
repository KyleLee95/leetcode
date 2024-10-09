/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let validPlotCount = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    const currPlot = flowerbed[i];
    if (!currPlot) {
      const isLeftEmpty = i === 0 || flowerbed[i - 1] === 0;
      const isRightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;
      if (isLeftEmpty && isRightEmpty) {
        flowerbed[i] = 1;
        validPlotCount += 1;
        if (validPlotCount >= n) {
          return true;
        }
      }
    }
  }
  return validPlotCount >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 1, 0, 1], 1));
