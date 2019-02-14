const sum_pairs = (ints, s) => {
  const set = new Set();

  for (let int of ints) {
    if (set.has(s - int)) {
      return [s - int, int];
    }
    set.add(int);
  }

  return undefined;
};

module.exports = sum_pairs;
