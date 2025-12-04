function unique(nums) {
  let prev = 0;
  let current = 1;

  while (current < nums.length) {
    if (nums[prev] == nums[current]) {
      current++;
    } else {
      prev++;
      nums[prev] = nums[current];
      current++;
    }
  }
  let count = 0;
  for (let i = 0; i <= prev; i++) {
    console.log(nums[i]);
    count++;
  }

  console.log(count);
}

unique([1, 1, 1, 2]);
