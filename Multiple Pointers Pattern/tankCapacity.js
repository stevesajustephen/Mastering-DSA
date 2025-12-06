/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    let tankWidth = right - left;
    let tankHeight =
      height[left] >= height[right] ? height[right] : height[left];
    let currentArea = tankHeight * tankWidth;
    if (currentArea > area) {
      area = currentArea;
    }
    height[left] > height[right] ? right-- : left++;
  }

  return area;
};
