function findAllDuplicates(nums) {
  const seen = {};

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let element = nums[i];

    seen[element] = (seen[element] || 0) + 1;
  }

  for (let key in seen) {
    if (seen[key] > 1) {
      result.push(parseInt(key));
    }
  }
  return result;
}

console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
