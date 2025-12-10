function areThereDuplicates(...args) {
  let seen = {};

  for (let i = 0; i < args.length; i++) {
    if (seen[args[i]]) {
      return true;
    } else {
      seen[args[i]] = (seen[args[i]] || 0) + 1;
    }
  }
  return false;
}
