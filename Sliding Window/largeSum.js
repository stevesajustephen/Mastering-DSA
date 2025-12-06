//[-2,1,-3,5,-4,8,9]

function largeSum(nums) {
  let max = -Infinity;
  let current = 0;
  for (let i = 0; i < nums.length; i++) {
    current = current + nums[i];

    if (current < max) {
      max = current;
    }
    if (current < 0) {
      current = 0;
    }
  }
  return max;
}
