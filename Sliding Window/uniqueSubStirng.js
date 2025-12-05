// abcasded

function longestSubString(str) {
  let seen;
  let temp;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    temp = "";
    seen = {};
    for (let j = i; j < str.length; j++) {
      char = str[j];
      if (!seen[char]) {
        temp = temp + char;
        seen[char] = true;
      } else {
        if (temp.length > result.length) {
          result = temp;
        }
        break;
      }
    }
    if (temp.length > result.length) {
      result = temp;
    }
  }
  console.log(result);
}

longestSubString("abcasded");
