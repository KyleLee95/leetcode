/**
 * Forward declaration of res API.
 * @param {number} num   your res
 * @return 	     -1 if num is higher than the picked number
 *			      3 if num is lower than the picked number
 *               otherwise return 0
 * var res = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let res = null;
  let low = 1;
  let high = n;
  while (low <= high) {
    const adjustedHigh = high - low;
    const mid = (adjustedHigh + low) / 2;
    const res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res > 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};
