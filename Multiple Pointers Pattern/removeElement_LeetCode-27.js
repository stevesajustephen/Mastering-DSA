/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = -1;
  let j = 0;

  while (j < nums.length) {
    if (nums[j] === val) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
      j++;
    }
  }

  return i + 1;
};
