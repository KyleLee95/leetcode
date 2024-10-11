/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  const stack = [];
  //one character string
  if (s.length === 1) {
    //remove the star and return an empty string
    if (s === "*") {
      return "";
    }
    //otherwise, just return the string itself
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    const currChar = s[i];

    //if star, then pop off the stack
    if (currChar === "*") {
      stack.pop();
    }
    //if not star, then add to the stack
    else {
      stack.push(currChar);
    }
  }
  return stack.join("");
};

const testCase = "leet**cod*e";
const testCase2 = "erase*****";
console.log(removeStars(testCase));
console.log(removeStars(testCase2));
