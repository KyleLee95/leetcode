/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "]") {
      let decodedString = [];
      // get the encoded string
      //'recursive case' where you backtrack within the stack
      //to build the flattened representation
      while (stack[stack.length - 1] !== "[") {
        decodedString.push(stack.pop());
      }
      // pop [ from the stack
      stack.pop();

      // get the number k
      let base = 1;
      let k = 0;
      while (stack.length > 0 && /\d/.test(stack[stack.length - 1])) {
        k = k + (stack.pop() - "0") * base;
        base *= 10;
      }

      // decode k[decodedString], by pushing decodedString k times into stack
      while (k !== 0) {
        for (let j = decodedString.length - 1; j >= 0; j--) {
          stack.push(decodedString[j]);
        }
        k--;
      }
    } else {
      stack.push(s[i]);
    }
  }

  // get the result from stack
  return stack.join("");
};

const test = "3[a]2[bc]";
const test2 = "3[a2[c]]";
const test3 = "2[abc]3[cd]ef";
console.log(decodeString(test));
console.log(decodeString(test2));
console.log(decodeString(test3));
