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

// longestSubString("abcasded");

function slidingWindow(str) {
  let start = 0;
  let seen = {};
  let maxStart = 0;
  let maxLength = 0;
  for (let end = 0; end < str.length; end++) {
    const char = str[end];

    if (seen[char] !== undefined) {
      start = seen[char] + 1;
    }
    seen[char] = end;

    if (maxLength < end - start + 1) {
      maxLength = end - start + 1;
      maxStart = start;
    }
  }
  console.log(str.slice(maxStart, maxStart + maxLength));
}

slidingWindow("abcasded");
