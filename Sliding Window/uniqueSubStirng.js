// abcasded

function subString(str) {
  let tempStr;
  let resultStr = "";
  let seen;

  for (let i = 0; i < str.length; i++) {
    tempStr = "";
    seen = {};
    for (let j = i; j < str.length; j++) {
      let char = str[j];
      if (!seen[char]) {
        tempStr = tempStr + char;
        seen[char] = true;
      } else {
        if (tempStr.length > resultStr.length) {
          resultStr = tempStr;
        }
        break;
      }
    }
    if (tempStr.length > resultStr.length) {
      resultStr = tempStr;
    }
  }

  console.log(resultStr);
}

subString("pwwkew");
