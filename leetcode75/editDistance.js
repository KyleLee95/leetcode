/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  if (word1.length === 0) {
    return word2.length;
  }
  if (word2.length === 0) {
    return word1.length;
  }
  const dp = Array.from(
    Array(word1.length + 1),
    () => new Array(word2.length + 1),
  );

  //init DP matrix with dummy row and cols

  for (let i = 0; i <= word1.length; i++) {
    dp[i][0] = i;
    for (let j = 0; j <= word2.length; j++) {
      dp[0][j] = j;
    }
  }

  //compare strings
  for (let i = 1; i <= word1.length; i++) {
    for (let j = 1; j <= word2.length; j++) {
      if (word2.charAt(j - 1) === word1.charAt(i - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        //you have to compare the current substring with all previous options.
        //hence you have to compare it to [i,j], [i-1,j], [i-1,j-1]
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }
  return dp[word1.length][word2.length];
};
const tests = [
  // { word1: "horse", word2: "ros" },
  { word1: "abc", word2: "aqc" },
];
for (const test of tests) {
  console.log(minDistance(test.word1, test.word2));
}
