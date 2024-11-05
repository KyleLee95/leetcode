/**
 * @param {number[][]} isConnected
 * @return {number}
 */

const dfs = (node, isConnected, visit) => {
  visit[node] = true;
  for (let i = 0; i < isConnected.length; i++) {
    if (isConnected[node][i] && !visit[i]) {
      dfs(i, isConnected, visit);
    }
  }
};
var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  let numComponents = 0;
  const visit = new Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    //iterate through the adjacency list
    //as we go from node to node, we'll traverse the current node's (i's)
    //neighbors.
    //if it's a fully connected graph, then dfs should only run once
    //since it should find *a* path through
    //as in, dfs will tell us about the existence of a simple path through G
    if (!visit[i]) {
      numComponents++;
      dfs(i, isConnected, visit);
    }
  }
  return numComponents;
};
