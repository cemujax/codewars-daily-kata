const removeNb = n => {
  const nSum = (n * (n + 1)) / 2;
  const result = [];

  for (let b = n; b >= 1; b--) {
    const a = (nSum - b) / (b + 1);
    if (a < n && Number.isInteger(a)) {
      result.push([a, b]);
    }
  }
  return result;
};

module.exports = removeNb;
