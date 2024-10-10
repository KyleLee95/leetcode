function productExceptSelf(nums) {
  const length = nums.length;
  const answer = new Array(length).fill(0);

  // answer[i] contains the product of all the elements to the left
  // For the element at index '0', there are no elements to the left,
  // so answer[0] would be 1
  answer[0] = 1;
  for (let i = 1; i < length; i++) {
    // answer[i - 1] contains the product of elements to the left of 'i - 1'
    // Multiplying it with nums[i - 1] gives the product of all
    // elements to the left of index 'i'
    answer[i] = nums[i - 1] * answer[i - 1];
  }

  // R contains the product of all the elements to the right
  // For the element at index 'length - 1', there are no elements to the right,
  // so R is initialized to 1
  let R = 1;
  for (let i = length - 1; i >= 0; i--) {
    // answer[i] contains the product of all elements to the left of 'i'
    // Multiply it with R to get the product of all elements except self
    answer[i] = answer[i] * R;
    R *= nums[i];
  }

  return answer;
}
