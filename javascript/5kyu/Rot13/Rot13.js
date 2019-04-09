const rot13 = message => {
  let lower = "",
    upper = "";
  for (let i = 0; i < 26; i++) {
    lower += String.fromCharCode(97 + i);
    upper += String.fromCharCode(65 + i);
  }
  const length = lower.length;

  let rot13 = message.split("").reduce((acc, v) => {
    if (v.match(/[a-z]/i)) {
      const replaceStr =
        lower.indexOf(v) > -1
          ? lower[(lower.indexOf(v) + 13) % length]
          : upper[(upper.indexOf(v) + 13) % length];
      acc += replaceStr;
    } else {
      acc += v;
    }
    return acc;
  }, "");
  return rot13;
};

module.exports = rot13;
