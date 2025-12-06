function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSumEfficient(nums, target) {
  const seen = {};
  for (let i = 0; i < nums.length; i++) {
    const secondNum = target - nums[i];
    if (seen[secondNum] !== undefined) {
      return [i, seen[secondNum]];
    } else {
      seen[nums[i]] = i;
    }
  }
  return [];
}
