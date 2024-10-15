/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  //Initialize the dp array with (text1.length + 1) rows and (text2.length + 1) columns
  const dp = Array(text1.length + 1)
    .fill(null)
    .map(() => Array(text2.length + 1).fill(0));

  // Now fill the dp table using the recurrence relation
  for (let i = 1; i <= text1.length; i++) {
    for (let j = 1; j <= text2.length; j++) {
      // If the characters match, add 1 to the value from the previous characters
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // Otherwise, take the maximum from either ignoring the current character from text1 or text2
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // The answer is in the bottom-right corner of the dp table
  return dp[text1.length][text2.length];
};
console.log(longestCommonSubsequence("abcde", "ace"));
