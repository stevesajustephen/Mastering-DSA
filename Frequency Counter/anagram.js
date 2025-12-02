function anagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sObj = {};
  const tObj = {};

  for (let char of s) {
    sObj[char] = (sObj[char] || 0) + 1;
  }

  for (let char of t) {
    tObj[char] = (tObj[char] || 0) + 1;
  }

  for (let key in sObj) {
    if (sObj[key] !== tObj[key]) {
      return false;
    }
  }

  return true;
}

console.log(anagram("steve", "veets"));
