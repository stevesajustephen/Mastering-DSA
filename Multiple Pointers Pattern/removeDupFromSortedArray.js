/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 1;
  while (j < nums.length) {
    if (nums[j] === nums[i]) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
    }
  }
  return i + 1;
};
