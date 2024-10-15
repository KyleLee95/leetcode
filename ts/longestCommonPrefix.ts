class TrieNode {
  children: { [key: string]: TrieNode };
  isEnd: boolean;
  linkCount: number;

  constructor() {
    this.children = {};
    this.isEnd = false;
    this.linkCount = 0;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (let char of word) {
      const charNotInWord = !node.children[char];
      if (charNotInWord) {
        node.children[char] = new TrieNode();
        //link count tells us how many other letters come after
        //this one across all words in the set under consideration
        //we use this later to only traverse paths that have a single letter
        //to search for a prefix
        node.linkCount++;
      }
      node = node.children[char];
    }
    node.isEnd = true;
  }

  searchLongestPrefix(word: string): string {
    let node = this.root;
    let prefix = "";
    for (let char of word) {
      if (node.children[char] && node.linkCount == 1 && !node.isEnd) {
        prefix += char;
        node = node.children[char];
      } else {
        break;
      }
    }
    return prefix;
  }
}

function longestCommonPrefix(q: string, strs: string[]): string {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let trie = new Trie();
  for (let i = 1; i < strs.length; i++) {
    trie.insert(strs[i]);
  }
  return trie.searchLongestPrefix(strs[0]);
}
