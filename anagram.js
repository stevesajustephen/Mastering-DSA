function anagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }
  const counter = {};

  for (let char of s1) {
    counter[char] = (counter[char] || 0) + 1;
  }

  for (let char of s2) {
    counter[char] = (counter[char] || 0) - 1;
  }

  for (let key in counter) {
    if (counter[key] !== 0) {
      return false;
    }
  }
  return true;
}
