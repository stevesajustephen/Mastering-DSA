/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const result = {};
  const uncommonWords = [];
  for (let word of s1.split(" ")) {
    result[word] = (result[word] || 0) + 1;
  }
  for (let word of s2.split(" ")) {
    result[word] = (result[word] || 0) + 1;
  }

  for (let word in result) {
    if (result[word] === 1) {
      uncommonWords.push(word);
    }
  }

  return uncommonWords;
};
