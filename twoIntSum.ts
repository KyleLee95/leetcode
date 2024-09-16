class Solution {
	/**
	 * @param {number[]} numbers
	 * @param {number} target
	 * @return {number[]}
	 */
	twoSum(numbers: number[], target: number): number[] | undefined {
		const arrLength = numbers.length - 1;
		let revIdx = arrLength;
		let fwdIdx = 0;
		while (fwdIdx < revIdx) {
			const forwardPtr: number = numbers[fwdIdx];
			const reversePtr: number = numbers[revIdx];
			const sum: number = forwardPtr + reversePtr;
			if (sum === target) {
				return [fwdIdx + 1, revIdx + 1];
			} else if (sum < target) {
				fwdIdx += 1;
			} else if (sum > target) {
				revIdx -= 1;
			}
		}
		return undefined;
	}
}

const tempSolution = new Solution();
const testInput = [1, 2, 3, 4];
const testTarget = 3;
console.log(tempSolution.twoSum(testInput, testTarget));
