const solution = str => {
  str = str.length % 2 ? str + "_" : str;
  return str.match(/../g);
};

module.exports = solution;
