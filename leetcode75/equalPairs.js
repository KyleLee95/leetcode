function equalPairs(grid) {
  let count = 0;
  const n = grid.length;

  // Keep track of the frequency of each row.
  const rowCounter = new Map();
  for (let row of grid) {
    const rowTuple = JSON.stringify(row);
    rowCounter.set(rowTuple, (rowCounter.get(rowTuple) || 0) + 1);
  }

  // Add up the frequency of each column in the map.
  for (let c = 0; c < n; c++) {
    const col = [];
    for (let i = 0; i < n; i++) {
      col.push(grid[i][c]);
    }
    const colTuple = JSON.stringify(col);
    count += rowCounter.get(colTuple) || 0;
  }

  return count;
}
