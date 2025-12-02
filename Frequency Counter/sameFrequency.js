function sameFrequency(n, m) {
  const nObj = {};
  const mObj = {};
  while (n) {
    const result = n % 10;
    nObj[result] = (nObj[result] || 0) + 1;
    n = Math.floor(n / 10);
  }

  while (m) {
    const result = m % 10;
    mObj[result] = (mObj[result] || 0) + 1;
    m = Math.floor(m / 10);
  }

  if (Object.keys(nObj).length !== Object.keys(mObj).length) {
    return false;
  }

  for (let key in nObj) {
    if (nObj[key] !== mObj[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
