function isAnagram(s: string, t: string): boolean {
  const map: Map<string, number> = new Map();
  const firstStringLength: number = s.length;

  for (let i = 0; i < firstStringLength; i++) {
    const currLetter = s[i];
    const isDuplicate: boolean = map.has(currLetter);
    if (isDuplicate) {
      const value: number | undefined = map.get(currLetter);
      if (!value) {
        map.set(currLetter, 1);
      } else {
        map.set(currLetter, value + 1);
      }
    } else {
      map.set(currLetter, 1);
    }
  }
  const secondStringLength = t.length;
  for (let j = 0; j < secondStringLength; j++) {
    const currLetter = t[j];
    const isDupe: boolean = map.has(currLetter);
    if (isDupe) {
      const value: number | undefined = map.get(currLetter);
      if (!value) {
        map.set(currLetter, 1);
      } else {
        map.set(currLetter, value - 1);
      }
    } else {
      map.set(currLetter, 1);
    }
  }
  const values = Array.from(map.values());
  for (let k = 0; k < values.length; k++) {
    const currVal = values[k];
    if (currVal !== 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("rat", "car"));
