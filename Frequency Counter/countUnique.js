function countUniqueValues(nums) {
  const counter = {};
  let count = 0;
  for (let el of nums) {
    counter[el] = (counter[el] || 0) + 1;
  }

  for (let key in counter) {
    count++;
  }
  return count;
}
