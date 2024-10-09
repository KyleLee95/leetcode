const numTilings = (n) => {
  const MOD = 1000000007;
  if (n <= 2) {
    return n;
  }
  let fPrevious = 1;
  let fCurrent = 2;
  let pCurrent = 1;

  for (let k = 3; k <= n; k++) {
    let tmp = fCurrent;
    fCurrent = (fCurrent + fPrevious + 2 * pCurrent) % MOD;
    pCurrent = (pCurrent + fPrevious) % MOD;
    fPrevious = tmp;
  }

  return fCurrent;
};

const test = 3;
console.log(numTilings(test));
