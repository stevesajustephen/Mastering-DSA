/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let pointer = digits.length - 1;

  if (digits[pointer] < 9) {
    digits[pointer] = digits[pointer] + 1;
    return digits;
  } else {
    let carry = 1;
    while (pointer >= 0) {
      if (digits[pointer] == 9 && carry) {
        digits[pointer] = 0;
        carry = 1;
      } else {
        digits[pointer] = digits[pointer] + carry;
        carry = 0;
      }
      pointer--;
    }
    if (pointer < 0 && carry) {
      return [1, ...digits];
    }
    return digits;
  }
};
