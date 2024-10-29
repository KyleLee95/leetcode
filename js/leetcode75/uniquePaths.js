var uniquePaths = function (m, n) {
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(1));
  console.log(dp);
  for (let col = 1; col < m; ++col) {
    for (let row = 1; row < n; ++row) {
      dp[col][row] = dp[col - 1][row] + dp[col][row - 1];
    }
  }
  return dp[m - 1][n - 1];
};

console.log(uniquePaths(2, 3));
