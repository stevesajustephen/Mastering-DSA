function averagePair(nums, target) {
  const newTarget = target * 2;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let tempSum = nums[left] + nums[right];

    if (tempSum === newTarget) {
      return true;
    } else if (tempSum < newTarget) {
      left++;
    } else {
      right--;
    }
  }

  return false;
}
