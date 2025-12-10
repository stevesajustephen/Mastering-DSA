function constructNote(message, letters) {
  if (message.length > letters.length) {
    return false;
  } else {
    const letterCounter = {};

    for (let char of letters) {
      letterCounter[char] = (letterCounter[char] || 0) + 1;
    }

    for (let char of message) {
      letterCounter[char] = (letterCounter[char] || 0) - 1;
      if (letterCounter[char] < 0) {
        return false;
      }
    }
    return true;
  }
}
