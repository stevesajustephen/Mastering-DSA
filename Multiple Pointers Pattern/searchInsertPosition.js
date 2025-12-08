/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let i = 0;

  if (target < nums[i]) return i;

  while (i < nums.length) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
    i++;
  }

  return nums.length;
};
