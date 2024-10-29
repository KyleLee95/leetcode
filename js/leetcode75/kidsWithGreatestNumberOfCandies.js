/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  const baselineMax = Math.max(...candies);
  const result = candies.map((candyCount) => {
    const countAfterExtraCandy = candyCount + extraCandies;

    if (countAfterExtraCandy < baselineMax) {
      return false;
    } else {
      return true;
    }
  });
  return result;
};
