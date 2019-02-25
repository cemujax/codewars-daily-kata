const digPow = (n, p) => {
  const sum = String(n)
    .split("")
    .reduce((acc, n) => acc + Math.pow(+n, p++), 0);

  const k = sum % n === 0 ? sum / n : -1;
  return k;
};

module.exports = digPow;
