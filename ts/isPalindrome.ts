class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s: String): boolean {
    const stringArr = s.replace(/\W/g, "").toLowerCase().split("");
    console.log(stringArr);
    const stringLength = stringArr.length - 1;
    for (let i = 0; i < stringLength; i++) {
      const forwardPtr = stringArr[i];
      const reversePtr = stringArr[stringLength - i];
      if (forwardPtr !== reversePtr) {
        return false;
      }
    }
    return true;
  }
}
const testString: string = "Was it a car or a cat I saw?";
const s = new Solution();
console.log(s.isPalindrome(testString));
