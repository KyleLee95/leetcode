const createHash = (word: string): string => {
  return word.split("").sort().join("");
};
function groupAnagrams(strs: string[]): string[][] {
  //create a dictionary that maps a lowercase letter to a value
  const dictionary: Map<string, string[]> = new Map();

  for (let i = 0; i < strs.length; i++) {
    const currWord: string = strs[i];
    const hash = createHash(currWord);
    const hasHash = dictionary.has(hash);

    if (hasHash) {
      const anagramsList: string[] | undefined = dictionary.get(hash);
      if (anagramsList) {
        anagramsList.push(currWord);
        dictionary.set(hash, anagramsList);
      }
    } else {
      dictionary.set(hash, [currWord]);
    }
  }

  if (dictionary.values()) {
    return [...dictionary.values()];
  } else {
    return [[""]];
  }
}

console.log(groupAnagrams(["bat", "tab", "d", "ac"]));
