/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let results = [];

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      results.push(i);
    }
  }
  console.log(results);
  for (let i = 0; i < results.length; i++) {
    const subStr = haystack.slice(results[i], results[i] + needle.length);
    console.log(subStr);
    if (subStr === needle) {
      return i;
    }
  }
  return -1;
};
