function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  } else {
    const obj = {};

    for (let element of arr2) {
      obj[element] = (obj[element] || 0) + 1;
    }

    for (let i = 0; i < arr1.length; i++) {
      const element = arr1[i];
      if (obj[element * element]) {
        obj[element * element]--;
      } else {
        return false;
      }
    }
    return true;
  }
}

console.log(same([1, 1, 1], [1, 1, 4]));
