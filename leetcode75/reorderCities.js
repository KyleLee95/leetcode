function minReorder(n, connections) {
  // Create an adjacency list and directed edge set
  const graph = Array.from({ length: n }, () => []);
  const directedEdges = new Set();

  // Build the graph and record directed edges
  for (let [u, v] of connections) {
    graph[u].push(v);
    graph[v].push(u);
    directedEdges.add(`${u}-${v}`);
  }
  console.log("graph", graph, "\n");
  console.log("directedEdges", graph, "\n");

  // DFS function to traverse and count reversals
  function dfs(city, visited) {
    visited.add(city);
    let reversalsNeeded = 0;

    for (const neighbor of graph[city]) {
      //KEY IS HERE:
      //once you start DFS, if you can reach every node when running dfs from 0, then every city would already be connected

      //we know this because the graph is an acyclic, directed, graph with n-1 edges and n nodes.

      //so we can explot this fact that there is not a shorter path to be made between the nodes unless we create a new edge between two previously unconnected nodes

      //so when we iterate through with dfs, if we reach a node we haven't visted in a given node's adjacency lsit AND there's an edge directed from the current city to its neighbor, then we know that we need to reverse the edge.
      if (!visited.has(neighbor)) {
        // Check if edge is directed from city to neighbor

        if (directedEdges.has(`${city}-${neighbor}`)) {
          reversalsNeeded++;
        }

        // Recursively call DFS and accumulate reversals
        reversalsNeeded += dfs(neighbor, visited);
      }
    }
    return reversalsNeeded;
  }

  // Initialize visited set and start DFS from city 0
  const visited = new Set();
  return dfs(0, visited);
}

// Test cases
console.log(
  minReorder(6, [
    [0, 1],
    [1, 3],
    [2, 3],
    [4, 0],
    [4, 5],
  ]),
); // Output: 3
// console.log(
//   minReorder(5, [
//     [1, 0],
//     [1, 2],
//     [3, 2],
//     [3, 4],
//   ]),
// ); // Output: 2
// console.log(
//   minReorder(3, [
//     [1, 0],
//     [2, 0],
//   ]),
// ); // Output: 0
