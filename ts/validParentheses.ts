const isValid = (string: string) => {
  const stack: Array<string> = [];

  const stringArr: Array<string> = string.split("");

  const pairs = new Map();
  pairs.set("}", "{");
  pairs.set(")", "(");
  pairs.set("]", "[");

  if (string.length <= 1) return false; // return early if there aren't enough characters

  //iterate over the array
  for (let i = 0; i < stringArr.length; i++) {
    const currChar: string = stringArr[i];
    const isOpeningParen =
      currChar === "(" || currChar === "[" || currChar === "{";
    if (isOpeningParen) {
      stack.unshift(currChar);
      continue;
    } else {
      const matchingChar = pairs.get(currChar);
      const topOfStack = stack.shift();
      const isMatching = topOfStack === matchingChar;

      if (isMatching) {
        continue;
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
};

const test: boolean = isValid("[[");
console.log(test);
