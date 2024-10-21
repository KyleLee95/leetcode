/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

const helper = (nums1, nums2) => {
  const res1 = new Set();
  const res2 = new Set(nums2);
  for (const num of nums1) {
    if (!res2.has(num)) {
      res1.add(num);
    }
  }
  return Array.from(res1);
};
var findDifference = function (nums1, nums2) {
  return [helper(nums1, nums2), helper(nums2, nums1)];
};

const tests = [
  [
    [1, 2, 3],
    [2, 4, 6],
  ],
];
for (const test of tests) {
  console.log("????", test);
  console.log(findDifference(test[0], test[1]));
}
