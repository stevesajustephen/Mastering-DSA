// [1,2,3,4,5,6,7,8,9,]

function largeSum(nums, n) {
  let tempSum = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    tempSum = tempSum + nums[i];
  }
  result = tempSum;

  for (let i = n; i < nums.length; i++) {
    tempSum = tempSum + nums[i] - nums[i - n];
    if (tempSum > result) {
      result = tempSum;
    }
  }
  console.log(result);
}

largeSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
