// time complexity n*n
function uniqueSubString(str) {
  let resultStr = "";
  for (let i = 0; i < str.length; i++) {
    let counter = {};
    let subStr = "";

    for (let j = i; j < str.length; j++) {
      const char = str[j];
      if (!counter[char]) {
        subStr = subStr + char;
        counter[char] = (counter[char] || 0) + 1;
      } else {
        if (subStr.length > resultStr.length) {
          resultStr = subStr;
        }
        break;
      }
    }
    if (resultStr.length < subStr.length) {
      resultStr = subStr;
    }
  }
  console.log(resultStr);
}

uniqueSubString("abcbef");
