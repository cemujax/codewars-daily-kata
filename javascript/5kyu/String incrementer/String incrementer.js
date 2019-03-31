const incrementString = strng => {
  let numIdx = 0;
  for (let i = strng.length - 1; i >= 0; i--) {
    if (!/\d/.test(strng[i])) {
      numIdx = i + 1;
      break;
    }
  }
  const string = strng.substr(0, numIdx);
  const num = Number(strng.substr(numIdx)) + 1 + "";

  return string + num.padStart(strng.length - numIdx, "0");
};

module.exports = incrementString;
