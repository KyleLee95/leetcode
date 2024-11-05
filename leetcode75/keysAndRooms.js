/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  //treat rooms as an adjacency list
  //dfs through the graph to see if you can hit all of the nodes

  const seen = new Array(rooms.length).fill(false);
  seen[0] = true;
  const stack = [0];
  while (stack.length > 0) {
    let node = stack.pop();
    for (let nei of rooms[node]) {
      //we iterate through the adjacency list for the keys in this room
      //and if we haven't found this key yet, then we add it to seen.
      //otherwise, we don't have to do anything

      //in the second test case, room 2 has the key to room 2 while none of the other nodes have a key for room 2.
      //so seen[1] (index of room 2) will be false since no other room has a key for room 2
      if (!seen[nei]) {
        seen[nei] = true;
        stack.push(nei);
      }
    }
  }
  console.log("seen", seen);
  return seen.every((room) => room);
};

const tests = [
  [[1], [2], [3], []],
  [[1, 3], [3, 0, 1], [2], [0]],
];
for (const test of tests) {
  console.log(canVisitAllRooms(test));
}
