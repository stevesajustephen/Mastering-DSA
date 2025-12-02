function sumZero(nums) {
  const result = [];

  let first = 0;
  let second = nums.length - 1;
  while (first < second) {
    if (nums[first] + nums[second] == 0) {
      result.push([nums[first], nums[second]]);
      first++;
      second--;
    } else if (nums[first] + nums[second] > 0) {
      second--;
    } else if (nums[first] + nums[second] < 0) {
      first++;
    }
  }
  console.log(result);
}

sumZero([-2, -1, 0, 1, 2]);
