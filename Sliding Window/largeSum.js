// time complexity n*n
function largeSum(nums, n) {
  let left = 0;
  let right = n - 1;
  let result = 0;
  while (right < nums.length) {
    let sum = 0;

    for (let i = left; i <= right; i++) {
      sum = sum + nums[i];
    }
    if (sum > result) {
      result = sum;
    }
    left++;
    right++;
  }
  console.log(result);
}

largeSum([1, 2, 3, 4, 5], 2);

// largeSubSetSum with sliding window Pattern
// [2, 1, 5, 1, 3, 2]

function largeSumWindow(nums, n) {
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < n; i++) {
    tempSum = tempSum + nums[i];
  }
  maxSum = tempSum;

  for (let i = n; i < nums.length; i++) {
    tempSum = tempSum - nums[i - n] + nums[i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }
  console.log(maxSum);
}

largeSumWindow([2, 1, 5, 1, 3, 2], 3);
